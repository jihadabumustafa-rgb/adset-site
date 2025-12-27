"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/waitlist", { method: "POST", body: fd });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error ? String(data.error) : "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — you’re on the waitlist. We’ll keep you updated (about once per month).");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {/* honeypot (spam trap) */}
      <input name="company" type="text" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          className={`rounded-xl px-5 py-3 text-sm font-medium ${
            status === "loading"
              ? "cursor-wait bg-zinc-800 text-white"
              : status === "success"
                ? "bg-zinc-200 text-zinc-500 cursor-not-allowed"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
          }`}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Joining..." : status === "success" ? "Joined" : "Join"}
        </button>
      </div>

      <label className="flex items-start gap-2 text-xs text-zinc-600">
        <input type="checkbox" name="consent" required className="mt-0.5" disabled={status === "loading"} />
        <span>
          I agree to receive product updates (about once per month). I can unsubscribe anytime. See{" "}
          <a className="underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {status !== "idle" && message ? (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-zinc-200 bg-zinc-50 text-zinc-700"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}
