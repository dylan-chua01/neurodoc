'use client';

import { useChat } from 'ai/react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, FileText, Sparkles } from "lucide-react";
import MessageList from "./message-list";
import { useState, useEffect, useRef } from 'react';

type Props = {
  fileUrl: string;
};

const ChatSidebar = ({ fileUrl }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { messages, input, handleInputChange, append } = useChat({
    api: '/api/chat',
    body: { fileUrl },
  });

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;
  
    setIsLoading(true);
    try {
      await append({
        content: trimmedInput,
        role: 'user',
      });
  
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileUrl,
          question: trimmedInput, // Ensure question is defined
          chatHistory: messages
            .filter(m => m.role === 'user')
            .slice(0, -1) // Exclude current question
            .map(m => m.content)
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { answer, sources } = await response.json();

      await append({
        content: answer,
        role: 'assistant',
        data: { sources },
      });
    } catch (error) {
      console.error(error);
      await append({
        content: error instanceof Error
          ? error.message
          : "Sorry, I couldn't process your question.",
        role: 'assistant',
      });
    } finally {
      setIsLoading(false);
      // Focus back on input after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh]">
      {/* Header */}
      <div className="p-4 border-b bg-gradient-to-r from-emerald-50 to-teal-50 flex items-center gap-2">
        <FileText className="h-5 w-5 text-emerald-600" />
        <h3 className="font-medium text-emerald-800">Document Assistant</h3>
      </div>
      
      {/* Initial state when no messages */}
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-gray-500 space-y-3">
          <Sparkles className="h-8 w-8 text-emerald-500 mb-2" />
          <h4 className="font-medium text-gray-700">Ask about this document</h4>
          <p className="text-sm">Get insights, summaries or ask specific questions about the content.</p>
        </div>
      )}
      
      {/* Messages */}
      <div 
        ref={chatContainerRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        <MessageList messages={messages} />
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="sticky bottom-0 p-4 bg-white border-t shadow-sm">
  <div className="flex gap-2 items-center">
    <Input
      ref={inputRef}
      value={input}
      onChange={handleInputChange}
      placeholder="Ask about this document..."
      disabled={isLoading}
      className="rounded-full bg-gray-50 border-gray-200 focus:border-emerald-300 focus:ring-emerald-200"
      onKeyDown={(e) => {
        // Prevent submitting empty messages with Enter key
        if (e.key === 'Enter' && !input.trim()) {
          e.preventDefault();
        }
      }}
    />
    <Button 
      type="submit" 
      disabled={isLoading || !input.trim()}
      className="rounded-full h-10 w-10 p-0 bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center shrink-0"
    >
      {isLoading ? 
        <span className="animate-pulse">...</span> : 
        <Send className="h-4 w-4" />
      }
    </Button>
  </div>
</form>
    </div>
  );
};

export default ChatSidebar;