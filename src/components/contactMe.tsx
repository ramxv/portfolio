"use client";

import { FormEvent, useState } from "react";

export default function ContactMe() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    // Aquí integrarás Resend: envía formData a tu API route
    const formData = new FormData(event.currentTarget);
    console.log("Send with Resend payload:", Object.fromEntries(formData));

    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <div className="w-full">
      <h2 id="contactMe" className="mb-4 text-3xl font-bold">
        Contact Me
      </h2>

      <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-gray-800/70 dark:bg-neutral-900/70">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500"
        />

        <form
          onSubmit={handleSubmit}
          className="relative space-y-4"
          aria-busy={status === "sending"}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
              Name
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-1 block h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-white/10"
              />
            </label>
            <label className="space-y-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
              Email
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-1 block h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-white/10"
              />
            </label>
          </div>

          <label className="space-y-1.5 text-sm font-medium text-gray-900 dark:text-gray-100">
            Subject
            <input
              name="subject"
              type="text"
              placeholder="Project inquiry"
              className="mt-1 block h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-white/10"
            />
          </label>

          <label className="space-y-5 text-sm font-medium text-gray-900 dark:text-gray-100">
            Message
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Share the details, timeline, and goals."
              className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-white/10"
            />
          </label>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 mt-5 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus-visible:outline-white"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Sent"
                : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
