export const parseSection = (section: string): { title: string; points: string[] } => {
    const [title, ...content] = section.split('\n');
    const cleanTitle = title.replace(/^#+\s*/, '').trim();
    
    const points: string[] = [];
    let currentPoint = '';
  
    content.forEach((line) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        if (currentPoint) points.push(currentPoint);
        currentPoint = trimmedLine.substring(1).trim();
      } else if (!trimmedLine) {
        if (currentPoint) points.push(currentPoint);
        currentPoint = '';
      } else {
        currentPoint += (currentPoint ? ' ' : '') + trimmedLine;
      }
    });
  
    if (currentPoint) points.push(currentPoint);
  
    return { 
      title: cleanTitle, 
      points: points.filter(point => point && !point.startsWith('#') && !point.startsWith('[Choose'))
    };
  };

export function parsePoint(point: string) {
    const isNumbered = /^\d+\./.test(point.trim());
    const isMainPoint = /^[•-]/.test(point.trim());
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
    const hasEmoji = emojiRegex.test(point);
    const isEmpty = !point.trim();
    const isSubPoint = /^\s{2,}[•-]/.test(point);

    return { isNumbered, isMainPoint, hasEmoji, isEmpty, isSubPoint };
}

export function parseEmojiPoint(content: string) {
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
    const emojiMatch = content.match(emojiRegex);
    const emoji = emojiMatch ? emojiMatch[0] : '';
    const text = content.replace(emojiRegex, '').replace(/^[•\-\s]+/, '').trim();
    return { emoji, text };
}