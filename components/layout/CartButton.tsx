"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

export function CartButton({ className }: { className?: string }) {
  const count = useCart((s) => s.count());

  return (
    <Link
      href="/panier"
      className={cn(
        "relative rounded-lg p-2 text-ink transition-colors hover:bg-warm",
        className
      )}
      aria-label={`Panier${count > 0 ? `, ${count} article(s)` : ""}`}
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
