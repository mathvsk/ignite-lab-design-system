import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChield: boolean;
}

export function Heading({ size = "md", children, asChield }: HeadingProps) {
    const Component = asChield ? Slot : "h2"
    return(
        <Component
            className={clsx(
                "text-gray-100 font-bold font-sans",
                {
                    "text-lg": size === "sm",
                    "text-xl": size === "md",
                    "text-2xl": size === "lg",
                }
            )}
        >
            { children }
        </Component>
    )
}