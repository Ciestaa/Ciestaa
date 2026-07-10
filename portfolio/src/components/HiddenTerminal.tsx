import React, { useState, useEffect, useRef } from 'react';

interface CommandOutput {
  id: string;
  type: 'input' | 'output' | 'error';
  content: string | React.ReactNode;
}

const HiddenTerminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    { id: 'init', type: 'output', content: 'Fedora Linux 38 (Workstation Edition)\nKernel: 6.2.9-300.fc38.x86_64\n\nType "help" for a list of commands.' }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Toggle terminal with backtick
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { id: Date.now().toString(), type: 'input' as const, content: input }];

    let response: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands: help, whoami, ls, clear, exit';
        break;
      case 'whoami':
        response = 'M. Mizwar Fahmi - Full-Stack Developer & Analyst';
        break;
      case 'ls':
        response = (
          <div className="flex flex-col text-accent">
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 Hero_Section</span>
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 About_Me</span>
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 Tech_Stack</span>
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 Featured_Works</span>
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 The_Lab</span>
            <span>drwxr-xr-x 2 ciestaa ciestaa 4096 Jul 10 10:00 AFK_Status</span>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      default:
        newHistory.push({ id: Date.now().toString() + '-err', type: 'error', content: `bash: ${cmd}: command not found` });
        setHistory(newHistory);
        setInput('');
        return;
    }

    newHistory.push({ id: Date.now().toString() + '-res', type: 'output', content: response });
    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 flex flex-col font-mono text-sm h-[60vh]">
        
        {/* Terminal Header */}
        <div className="bg-[#323232] px-4 py-2 flex items-center justify-between border-b border-black">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" onClick={() => setIsOpen(false)}></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-gray-400 text-xs font-sans">ciestaa@fedora:~</span>
          <div className="w-12"></div> {/* Spacer for centering */}
        </div>

        {/* Terminal Body */}
        <div ref={scrollRef} className="p-4 flex-1 overflow-y-auto text-gray-300 space-y-2 cursor-text" onClick={() => inputRef.current?.focus()}>
          
          {history.map((line) => (
            <div key={line.id} className="whitespace-pre-wrap break-words">
              {line.type === 'input' && (
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">ciestaa@fedora:~$</span>
                  <span className="text-white">{line.content}</span>
                </div>
              )}
              {line.type === 'output' && <div>{line.content}</div>}
              {line.type === 'error' && <div className="text-red-400">{line.content}</div>}
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-green-400 font-bold">ciestaa@fedora:~$</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
              autoComplete="off"
              spellCheck="false"
            />
          </form>

        </div>
      </div>
    </div>
  );
};

export default HiddenTerminal;
