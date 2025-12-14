import { useEffect } from "react";

const normalizeHash = (hash: string) => hash.replace(/^#\/?/, "").trim();

const scrollToHashTarget = (hash: string) => {
  const targetId = normalizeHash(hash);
  const targetElement = targetId
    ? document.getElementById(targetId)
    : document.body;

  if (!targetElement) {
    return;
  }

  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const useHashAnchorScroll = () => {
  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) {
        return;
      }

      const anchor = (
        (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a")
      );

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || !href.startsWith("#")) {
        return;
      }

      const targetId = normalizeHash(href);
      const targetElement = targetId
        ? document.getElementById(targetId)
        : document.body;

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onHashChange = () => {
      scrollToHashTarget(window.location.hash);
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
};