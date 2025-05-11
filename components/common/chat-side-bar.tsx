'use client';
import { useChat } from 'ai/react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import MessageList from "./message-list";
import { useState } from 'react';

export default function ChatSidebar({ fileUrl }: { fileUrl: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const { messages, input, handleInputChange, append } = useChat({
        api: '/api/chat',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setIsLoading(true);
        try {
            await append({
                content: input,
                role: 'user',
            });

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fileUrl,
                    question: input,
                    chatHistory: messages.filter(m => m.role === 'user').map(m => m.content)
                })
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const { answer, sources } = await response.json();
            
            await append({
                content: answer,
                role: 'assistant',
                data: { sources }
            });

        } catch (error) {
            console.error(error);
            await append({
                content: error instanceof Error 
                    ? error.message 
                    : "Sorry, I couldn't process your question.",
                role: 'assistant'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
                <MessageList messages={messages} />
            </div>
            
            <form onSubmit={handleSubmit} className="sticky bottom-0 p-4 bg-white border-t">
                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask about this PDF..."
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading || !input.trim()}>
                        {isLoading ? <span className="animate-pulse">...</span> : <Send className="h-4 w-4" />}
                    </Button>
                </div>
            </form>
        </div>
    );
}