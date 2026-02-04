import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const themes = [
  { id: 'dark', name: 'Dark Mode', emoji: '🌙' },
];

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);

  const handleThemeSelect = (themeId) => {
    document.documentElement.classList.remove('ocean');

    if (themeId === 'ocean') {
      document.documentElement.classList.add('ocean');
    }

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[var(--text)] hover:bg-[var(--card)] rounded-full"
        >
          <Palette className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-[var(--card)] border-[var(--border)] max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-[var(--text)]">
            Choose Theme
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-3 mt-4">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeSelect(theme.id)}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all text-[var(--text)]"
            >
              <div className="text-2xl">{theme.emoji}</div>
              <div className="mt-2">{theme.name}</div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
