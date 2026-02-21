"use client";

import { useUmami } from "next-umami";
import React, { ReactNode } from "react";

export default function TrackedLink({
  href,
  eventName,
  children,
  ...props
}: {
  href: string;
  eventName: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const umami = useUmami();

  return (
    <a
      href={href}
      onClick={() => umami.event(eventName)}
      {...props}
    >
      {children}
    </a>
  );
}
