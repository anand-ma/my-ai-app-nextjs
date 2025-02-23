"use client";

import { Card } from "@/components/ui/card";
import { aiApps } from "@/lib/data";
import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 glow bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-pink))]">
            AI Apps Collection
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-[hsl(var(--neon-pink))]" />
            <p className="text-lg">Discover the future of technology</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiApps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                <Card className={`p-6 card-glow hover:bg-muted/50 transition-all duration-300 ${
                  index % 2 === 0 ? 'card-glow-blue' : 'card-glow-pink'
                }`}>
                  <div className="flex items-start justify-between">
                    <h2 className={`text-2xl font-semibold ${
                      index % 2 === 0 
                        ? 'text-[hsl(var(--neon-blue))]' 
                        : 'text-[hsl(var(--neon-pink))]'
                    }`}>
                      {app.name}
                    </h2>
                    <ExternalLink className={`w-5 h-5 opacity-70 ${
                      index % 2 === 0 
                        ? 'text-[hsl(var(--neon-blue))]' 
                        : 'text-[hsl(var(--neon-pink))]'
                    }`} />
                  </div>
                  <p className="mt-3 text-muted-foreground">{app.description}</p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}