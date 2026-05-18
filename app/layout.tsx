import React from 'react';
import './globals.css';

export const metadata = {
  title: 'FinanceSight | AI Financial Intelligence Terminal',
  description: 'Track strategic asset story arcs and calculate fiscal indicators.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#010409] text-[#F3F4F6]">
      <body>
        <div className="w-full bg-[#010409] border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-4xl mx-auto h-10 flex items-center justify-between px-4 text-xs font-bold tracking-wider">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">S&P 500</span>
              <span className="text-[#34D399]">7,379.8 (+0.14%)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">NASDAQ 100</span>
              <span className="text-[#F87171]">28,893.9 (-0.42%)</span>
            </div>
          </div>
        </div>
        <main className="pb-32">{children}</main>
      </body>
    </html>
  );
}

