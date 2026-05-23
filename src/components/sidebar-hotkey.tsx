"use client";

import { useEffect } from "react";
import { useSidebar } from "fumadocs-ui/layouts/docs/slots/sidebar";

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.isContentEditable ||
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

export function SidebarHotkey() {
  const { mode, setCollapsed, setOpen } = useSidebar();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        isEditableTarget(event.target) ||
        event.key.toLowerCase() !== "s" ||
        !event.shiftKey ||
        !(event.metaKey || event.ctrlKey)
      ) {
        return;
      }

      event.preventDefault();

      if (mode === "drawer") {
        setOpen((open) => !open);
        return;
      }

      setCollapsed((collapsed) => !collapsed);
    }

    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, [mode, setCollapsed, setOpen]);

  return null;
}
