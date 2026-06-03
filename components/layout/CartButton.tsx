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
        "relative flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5",
        className
      )}
      aria-label={`Panier${count > 0 ? `, ${count} article(s)` : ""}`}
    >
      <ShoppingCart className="h-5 w-5" strokeWidth={1.8} />
      {count > 0 && (
        <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#f08222] text-[9px] font-bold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
