import React from 'react';

interface ContentSectionProps {
  title: string;
}

export function ContentSection({ title, children }: React.PropsWithChildren<ContentSectionProps>) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center x-gradient-font">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-800 text-justify">
        {children}
      </div>
    </div>
  );
}