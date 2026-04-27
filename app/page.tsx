import Link from "next/link";

export default function LandingPage() {
  const models = [
    {
      name: "Claude",
      slug: "claude",
      provider: "Anthropic",
      desc: "Long context, reasoning, coding, and enterprise-grade AI tasks.",
      tag: "Premium",
    },
    {
      name: "ChatGPT / GPT",
      slug: "gpt",
      provider: "OpenAI",
      desc: "Advanced chat, coding, image, reasoning, and general AI workloads.",
      tag: "Popular",
    },
    {
      name: "Gemini",
      slug: "gemini",
      provider: "Google",
      desc: "Multimodal reasoning, fast generation, and high-performance AI applications.",
      tag: "Multimodal",
    },
    {
      name: "DeepSeek",
      slug: "deepseek",
      provider: "DeepSeek",
      desc: "Cost-efficient reasoning and chat inference for large-scale API usage.",
      tag: "Low Cost",
    },
    {
      name: "Qwen",
      slug: "qwen",
      provider: "Alibaba",
      desc: "Multilingual, coding, and enterprise AI workloads with strong performance.",
      tag: "Global",
    },
    {
      name: "MiniMax",
      slug: "minimax",
      provider: "MiniMax",
      desc: "High-demand model family for global API distribution and chat applications.",
      tag: "Fast",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-zinc-300">
              Global Multi-Model AI API Platform
            </div>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              One API for Claude, GPT, Gemini, DeepSeek and more
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
              Unified AI model access with smart routing, fallback, and
              cost-optimized API infrastructure for global developers and AI teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#models"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:opacity-90"
              >
                View Models
              </a>
              <a
                href="#docs"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                API Docs
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-zinc-400 md:max-w-lg">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div className="mt-1">Target uptime</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">6+</div>
                <div className="mt-1">Model families</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">1 API</div>
                <div className="mt-1">Unified endpoint</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 shadow-2xl shadow-black/40">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-4">
              <div className="mb-3 flex items-center justify-between text-sm text-zinc-400">
                <span>POST /v1/chat/completions</span>
                <span>OpenAI-compatible</span>
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 text-sm leading-7 text-zinc-200">
{`curl https://api.yourdomain.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Supported Models
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Choose a model or use auto-routing
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-400 md:text-base">
            Users can select a specific model, or use auto-routing to optimize
            for price, speed, and availability.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xl font-semibold">{model.name}</div>
                  <div className="mt-1 text-sm text-zinc-500">
                    {model.provider}
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300">
                  {model.tag}
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {model.desc}
              </p>

              <div className="mt-5 text-sm text-blue-400 group-hover:text-blue-300">
                View pricing →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold">Unified API</h3>
            <p className="mt-3 text-zinc-400">
              One OpenAI-compatible endpoint for multiple global and Chinese AI models.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold">Smart Routing</h3>
            <p className="mt-3 text-zinc-400">
              Route traffic by price, quality, latency, model type, or fallback rules.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold">Cost Optimization</h3>
            <p className="mt-3 text-zinc-400">
              Reduce API cost with model selection, fallback, caching, and usage control.
            </p>
          </div>
        </div>
      </section>

      {/* Docs */}
      <section id="docs" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                API Docs
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                OpenAI-compatible access
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Integrate once and access multiple AI model providers through one API.
                Use model names such as <span className="text-white">auto</span>,{" "}
                <span className="text-white">gpt</span>,{" "}
                <span className="text-white">claude</span>,{" "}
                <span className="text-white">gemini</span>, or{" "}
                <span className="text-white">deepseek</span>.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-300">
              <div>Base URL</div>
              <div className="mt-2 rounded-xl bg-white/5 px-4 py-3 font-mono text-white">
                https://api.yourdomain.com/v1
              </div>

              <div className="mt-5">Contact</div>
              <div className="mt-2 rounded-xl bg-white/5 px-4 py-3 text-white">
                Thomas Wang
                <br />
                faihangllc@gmail.com
                <br />
                909-922-9887
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Faihang LLC. All trademarks belong to their respective owners.
      </footer>
    </main>
  );
}