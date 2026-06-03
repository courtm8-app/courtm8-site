"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_REGEX.test(trimmed)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="animate-in fade-in fill-mode-both rounded-xl border border-border/80 bg-muted/30 px-4 py-3 text-[clamp(0.9375rem,1vw+0.5rem,1.0625rem)] text-foreground duration-300">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="flex flex-col gap-3">
      <form
        onSubmit={onSubmit}
        noValidate
        className="flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:gap-3"
      >
        <Input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-label="Email address"
          aria-invalid={status === "error"}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setError(null);
            }
          }}
          disabled={isSubmitting}
          className="h-12 min-w-0 flex-1 px-4 text-[clamp(1rem,1vw+0.5rem,1.125rem)] md:h-14 md:px-5"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full shrink-0 px-6 text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] font-medium hover:bg-primary/85 sm:w-auto md:h-14 md:px-8"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              <span className="sr-only">Submitting</span>
            </>
          ) : (
            "Join the waitlist"
          )}
        </Button>
      </form>

      {error ? (
        <p
          className="text-[clamp(0.8125rem,1vw+0.25rem,0.9375rem)] text-muted-foreground"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
