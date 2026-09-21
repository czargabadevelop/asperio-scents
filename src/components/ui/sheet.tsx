"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;
export function SheetContent({ children, className, ...props }: React.ComponentProps<typeof Dialog.Content>) {
  return <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/35 data-[state=open]:animate-[fade-in_180ms_ease-out]" />
    <Dialog.Content className={cn("fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col bg-paper px-7 pb-8 pt-20 shadow-xl", className)} {...props}>
      {children}
      <Dialog.Close className="absolute right-5 top-5 flex size-11 items-center justify-center hover:bg-stone-200" aria-label="Close menu"><X size={22} aria-hidden="true" /></Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>;
}
