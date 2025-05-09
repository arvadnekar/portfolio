'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: input },
    ];
    setMessages(newMessages); // Update state with the user's message
    setInput('');
    setLoading(true);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessages), // Send the correct message format
    });

    const data = await response.json();
    setMessages([...newMessages, { role: 'assistant', content: data.reply }]); // Add assistant's reply
    setLoading(false);
  };

  return (
    <div className="bg-muted/50 p-4 rounded-lg w-full max-w-md flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded ${msg.role === 'user' ? 'bg-primary/10 text-right' : 'bg-secondary'}`}
          >
            <strong>{msg.role === 'user' ? 'You' : 'AI'}</strong>: {msg.content}
          </div>
        ))}
        {loading && (
          <p className="text-muted-foreground text-sm">Thinking...</p>
        )}
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          placeholder="Ask me something..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <Button type="button" onClick={sendMessage} disabled={loading}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
