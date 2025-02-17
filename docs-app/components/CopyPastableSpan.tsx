"use client";

import React from "react";

export const CopyPastableSpan = ({ text }: { text: string }) => {
  return (
    <span
      className="bg-gray-100 text-sm font-semibold px-2 dark:bg-gray-600"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      {text}
    </span>
  );
};
