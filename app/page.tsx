export default function LandingPage() {
  const models = [
    { name: "DeepSeek", desc: "Low-cost reasoning and chat inference" },
    { name: "Qwen", desc: "Strong multilingual and enterprise-friendly models" },
    { name: "MiniMax", desc: "High-demand model family for global API distribution" },
    { name: "Doubao", desc: "Reliable large-scale inference for production workloads" },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-zinc-300">
              Multi-Model AI API Provider
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              One API for global access to leading AI models
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
              Unified inference access for DeepSeek, Qwen, MiniMax, Doubao and more.
              Fast routing, reliable uptime, and provider-ready infrastructure.
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
                <div className="text-2xl font-semibold text-white">4+</div>
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
    "model": "deepseek-chat",
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Supported Models</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Built for flexible routing</h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-400 md:text-base">
            Route by price, quality, latency, or availability across multiple upstream providers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {models.map((model) => (
            <div key={model.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xl font-semibold">{model.name}</div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{model.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Unified endpoint",
              desc: "Integrate once and route requests to the best available model behind the scenes.",
            },
            {
              title: "Provider-ready infrastructure",
              desc: "Designed for OpenRouter-style distribution, stable inference delivery, and scalable deployment.",
            },
            {
              title: "Fast onboarding",
              desc: "Start with a simple API workflow today and expand into billing, dashboards, and enterprise controls later.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="docs" className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Docs</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Simple API access</h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                OpenAI-compatible request format with support for chat completions, model listing,
                authentication, and flexible upstream routing.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-300">
              <div>Base URL</div>
              <div className="mt-2 rounded-xl bg-white/5 px-4 py-3 font-mono text-white">
                https://api.yourdomain.com/v1
              </div>
              <div className="mt-5">Contact</div>
              <div className="mt-2 rounded-xl bg-white/5 px-4 py-3 text-white">
                business@yourdomain.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}