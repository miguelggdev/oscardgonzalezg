import * as React from "react";

export interface ScrollLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  offset?: number;
  smooth?: boolean;
}

export const ScrollLink = React.forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  (
    {
      to,
      offset = 0,
      smooth = true,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const targetId = to.replace(/^#/, "");
      const target = document.getElementById(targetId);

      if (target) {
        const top =
          target.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
          top,
          behavior: smooth ? "smooth" : "auto",
        });
      }

      if (typeof onClick === "function") {
        onClick(event);
      }
    };

    return (
      <a ref={ref} href={to} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  },
);

ScrollLink.displayName = "ScrollLink";