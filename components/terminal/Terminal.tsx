"use client";

import { useState } from "react";
import { commands } from "./command";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([
    "Embedded Engineering Terminal v2.0",
    "Type 'help' to begin.",
  ]);

  const [input, setInput] = useState("");

  function execute(command: string) {
    if (command === "clear") {
      setHistory([]);
      return;
    }

    const output =
      commands[command as keyof typeof commands] ??
      `Unknown Command : ${command}`;

    setHistory((prev) => [...prev, `> ${command}`, output]);
  }

  return (
    <section
      id="terminal"
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black p-8">

        <div className="mb-6 flex gap-3">

          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

        </div>

        <div className="min-h-87.5 font-mono text-green-400">

          {history.map((line, i) => (
            <pre
              key={i}
              className="whitespace-pre-wrap mb-2"
            >
              {line}
            </pre>
          ))}

          <div className="flex">

            <span className="mr-2 text-cyan-400">
              Samarth@Portfolio:~$
            </span>

            <input
              autoComplete="off"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  execute(input.trim());

                  setInput("");
                }
              }}
              className="flex-1 bg-transparent outline-none"
            />

          </div>

        </div>

      </div>
    </section>
  );
}