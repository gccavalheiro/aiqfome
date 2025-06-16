"use client";
import { cn } from "@/lib/utils";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Icon } from "../ui/icon";
import { Input } from "../ui/input";

export function Search() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const hasQuery = !!searchParams?.has("q");

  const handleSearch = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const value = inputRef.current?.value.trim() || "";

      router.push(`/?q=${encodeURIComponent(value)}`);
    },
    [router],
  );

  function handleClearSearch() {
    if (!inputRef.current) return;

    inputRef.current.value = "";

    router.push("/", {
      scroll: false,
    });
  }

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = query;
    }
  }, [query]);

  return (
    <form
      onSubmit={handleSearch}
      className="group bg-neutral-0 border-decorative-divider relative flex w-full gap-3 overflow-hidden rounded-md border px-3 focus-within:border-purple-400 focus-within:ring-1 focus-within:ring-purple-400"
    >
      <Icon
        icon={faMagnifyingGlass}
        className={cn(
          "text-decorative-divider cursor-pointer transition-colors duration-200 group-focus-within:text-purple-400",
          query ? "text-purple-400" : "",
        )}
        size={20}
        onClick={handleSearch}
      />
      <Input
        type="text"
        placeholder="busque pela loja ou culinária"
        ref={inputRef}
        autoFocus={hasQuery}
        className="h-10 w-full text-neutral-500 outline-none placeholder:font-semibold placeholder:text-neutral-500"
      />

      {hasQuery && (
        <Icon
          icon={faCircleXmark}
          className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 cursor-pointer text-purple-400"
          size={20}
          onClick={handleClearSearch}
        />
      )}
    </form>
  );
}
