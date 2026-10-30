"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { site } from "@/data/catalog";

const STORAGE_KEY = "asperio-welcome-dismissed";

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "true") return;
    } catch {
      // Storage can be unavailable in private browsing; show the popup anyway.
    }
    const timer = window.setTimeout(() => setOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  function remember() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage failures.
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) remember();
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="welcome-overlay" />
        <Dialog.Content className="welcome-dialog">
          <div className="welcome-media">
            <Image
              src="/images/open-road.webp"
              alt="Asperio’s glass car diffuser on a sunlit, tree-lined road"
              fill
              sizes="(max-width: 767px) 100vw, 390px"
              className="object-cover"
            />
            <span className="welcome-media-label">THE ART OF A BETTER DRIVE</span>
          </div>
          <div className="welcome-copy">
            <span className="eyebrow">Welcome to Asperio</span>
            <Dialog.Title className="welcome-title">Your everyday drive, <i>considered.</i></Dialog.Title>
            <Dialog.Description className="welcome-text">
              Premium-inspired car fragrances for the moments between here and there. Find the scent that makes the road feel like yours.
            </Dialog.Description>
            <div className="welcome-actions">
              <a
                href={site.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
                onClick={() => handleOpenChange(false)}
              >
                Shop on Shopee<ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Dialog.Close asChild>
                <Link href="/collection" className="button button-outline">
                  Explore the collection<ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Dialog.Close>
            </div>
            <p className="welcome-footnote">Ten signature scents · 8 ml each</p>
          </div>
          <Dialog.Close className="welcome-close" aria-label="Close welcome message">
            <X size={20} aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
