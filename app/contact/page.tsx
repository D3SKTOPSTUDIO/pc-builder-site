"use client";

import { useMemo, useState } from "react";

type UseCase = "Gaming" | "Work / Study" | "Streaming" | "Upgrade" | "Other";
type Budget = "< $1000" | "$1000–$1500" | "$1500–$2500" | "$2500+" | "Not sure";
type Timeline = "ASAP" | "1–2 weeks" | "This month" | "Just browsing";

export default function ContactPage() {
  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState<UseCase>("Gaming");
  const [budget, setBudget] = useState<Budget>("Not sure");
  const [timeline, setTimeline] = useState<Timeline>("Just browsing");
  const [message, setMessage] = useState("");

  const canGoNext = useMemo(() => {
    return name.trim().length >= 2 && email.includes("@");
  }, [name, email]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      `Enquiry sent (demo)\n\nName: ${name}\nEmail: ${email}\nUse case: ${useCase}\nBudget: ${budget}\nTimeline: ${timeline}\nMessage: ${message}`
    );
  }

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Send an enquiry to <span className="font-medium">D3SKTOP STUDIO</span>.
      </p>

      {/* Progress */}
      <div className="mt-6 flex items-center gap-3 text-sm">
        <div className={step === 1 ? "font-medium" : "opacity-50"}>Step 1</div>
        <div className="h-px w-8 bg-black/20" />
        <div className={step === 2 ? "font-medium" : "opacity-50"}>Step 2</div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-6 rounded-xl border border-black/10 p-6"
      >
        {step === 1 && (
          <>
            {/* Name + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/30"
                />
              </label>
            </div>

            {/* Use case */}
            <label className="grid gap-2">
              <span className="text-sm font-medium">
                What are you using the PC for?
              </span>
              <select
                value={useCase}
                onChange={(e) => setUseCase(e.target.value as UseCase)}
                className="rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/30"
              >
                <option>Gaming</option>
                <option>Work / Study</option>
                <option>Streaming</option>
                <option>Upgrade</option>
                <option>Other</option>
              </select>
            </label>

            {/* Step 1 actions */}
            <div className="flex justify-end">
              <button
                type="button"
                disabled={!canGoNext}
                onClick={() => setStep(2)}
                className={[
                  "rounded-md border px-4 py-3 text-sm font-medium",
                  canGoNext
                    ? "border-black bg-black text-white"
                    : "border-black/10 opacity-50 cursor-not-allowed",
                ].join(" ")}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Budget */}
            <div className="grid gap-2">
              <div className="text-sm font-medium">Budget range</div>
              <div className="flex flex-wrap gap-2">
                {(["< $1000", "$1000–$1500", "$1500–$2500", "$2500+", "Not sure"] as Budget[]).map(
                  (b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={[
                        "rounded-md border px-3 py-2 text-sm",
                        budget === b
                          ? "border-black bg-black text-white"
                          : "border-black/10 hover:border-black/30",
                      ].join(" ")}
                    >
                      {b}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="grid gap-2">
              <div className="text-sm font-medium">Timeline</div>
              <div className="flex flex-wrap gap-2">
                {(["ASAP", "1–2 weeks", "This month", "Just browsing"] as Timeline[]).map(
                  (t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={[
                        "rounded-md border px-3 py-2 text-sm",
                        timeline === t
                          ? "border-black bg-black text-white"
                          : "border-black/10 hover:border-black/30",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Message */}
            <label className="grid gap-2">
              <span className="text-sm font-medium">Anything else?</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Parts you already own, noise preference, colour theme, etc."
                className="rounded-md border border-black/10 px-3 py-2 outline-none focus:border-black/30"
              />
            </label>

            {/* Step 2 actions */}
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm opacity-70 hover:opacity-100"
              >
                Back
              </button>

              <button
                type="submit"
                className="rounded-md border border-black bg-black px-4 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Send Enquiry
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
