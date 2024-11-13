"use client";

import React, { useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyableCodeProps {
  code: string;
  className?: string;
}

export function CopyableCode({ code, className }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);
  const clipboard = useClipboard({
    copiedTimeout: 2000, // 2 seconds
  });

  const handleCopy = () => {
    clipboard.copy(code);
    setCopied(true);
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        className="h-8 w-8"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy to clipboard</span>
      </Button>
      {copied && (
        <span className="text-sm text-green-500">
          Copied to clipboard!
        </span>
      )}
    </div>
  );
}
