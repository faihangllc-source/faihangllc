import Link from "next/link";
import { notFound } from "next/navigation";

const modelData = {
  claude: {
    name: "Claude",
    provider: "Anthropic",
    badge: "Premium long-context model",
    input: "$1.00 - $3.00",
    output: "$5.00 - $15.00",
    context: "Large context",
    description:
      "Claude models are suitable for long-context reasoning, writing, coding, analysis, and enterprise AI workflows.",
    useCases: ["Long document analysis", "Coding assistance", "Business writing", "Agent workflows"],
    apiModel: "claude",
  },
  gpt: {
    name: "ChatGPT / GPT",
    provider: "OpenAI",
    badge: "Popular general-purpose model",
    input: "$2.00 - $2.50",
    output: "$8.00 - $10.00",
    context: "Varies by model",
    description:
      "GPT models are suitable for advanced chat, coding, reasoning, multimodal tasks, and production AI applications.",
    useCases: ["Chatbots", "Coding", "Image tasks", "General AI applications"],
    apiModel: "gpt",
  },
  gemini: {
    name: "Gemini",
    provider: "Google",
    badge: "Multimodal AI model",
    input: "$0.30 - $1.25",
    output: "0$2.50 - $10.00",
    context: "Large context",
    description:
      "Gemini models are suitable for multimodal reasoning, text generation, coding, and high-performance AI workloads.",
    useCases: ["Multimodal apps", "Reasoning", "Data analysis", "AI agents"],
    apiModel: "gemini",
  },
  deepseek: {
    name: "DeepSeek",
    provider: "DeepSeek",
    badge: "Cost-efficient reasoning model",
    input: "$0.14 - $0.55",
    output: "$1.10 - $2.19",
    context: "64K+",
    description:
      "DeepSeek is optimized for cost-efficient reasoning, chat inference, and large-scale API distribution.",
    useCases: ["Low-cost chat", "Reasoning tasks", "Large-scale API usage", "Developer tools"],
    apiModel: "deepseek-chat",
  },
  qwen: {
    name: "Qwen",
    provider: "Alibaba",
    badge: "Multilingual enterprise model",
    input: "$0.40 - $1.20",
    output: "$1.20 - $6.00",
    context: "Large context",
    description:
      "Qwen models are suitable for multilingual tasks, coding, enterprise AI workloads, and global API use cases.",
    useCases: ["Multilingual chat", "Coding", "Enterprise tools", "Document tasks"],
    apiModel: "qwen",
  },
  minimax: {
    name: "MiniMax",
    provider: "MiniMax",
    badge: "Fast chat model",
    input: "$0.30 - $0.60",
    output: "$1.20 - $2.40",
    context: "Varies by model",
    description:
      "MiniMax models are suitable for high-demand chat applications, global model distribution, and fast response workloads.",
    useCases: ["Chat applications", "Customer support", "AI tools", "High-volume traffic"],
    apiModel: "minimax",
  },
};

type ModelSlug = keyof typeof modelData;

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = modelData[slug as ModelSlug];

  if (!model) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <Link
          href="/"
          className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
        >
          ← Back to Home
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
              {model.badge}
            </div>

            <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
              {model.name} API
            </h1>

            <p className="mt-3 text-zinc-500">
              Provider: {model.provider}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              {model.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-zinc-950 transition hover:opacity-90"
              >
                View Pricing
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Model Highlights</h2>
            <div className="mt-5 grid gap-3">
              {model.useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Pricing
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            {model.name} pricing
          </h2>
          <p className="mt-3 text-zinc-400">
            Volume pricing is available for teams, developers, and high-usage API customers.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-zinc-400">Input Price</div>
            <div className="mt-3 text-3xl font-semibold">{model.input}</div>
            <div className="mt-1 text-sm text-zinc-500">per 1M tokens</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-zinc-400">Output Price</div>
            <div className="mt-3 text-3xl font-semibold">{model.output}</div>
            <div className="mt-1 text-sm text-zinc-500">per 1M tokens</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-zinc-400">Context Window</div>
            <div className="mt-3 text-3xl font-semibold">{model.context}</div>
            <div className="mt-1 text-sm text-zinc-500">tokens</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 md:p-8">
          <h2 className="text-2xl font-semibold">API Example</h2>

          <pre className="mt-5 overflow-x-auto rounded-2xl bg-black/40 p-5 text-sm leading-7 text-zinc-200">
{`curl https://api.yourdomain.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model.apiModel}",
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'`}
          </pre>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Request API access
          </h2>

          <p className="mt-4 text-zinc-400">
            Contact us for model access, volume pricing, API integration, and provider routing.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-zinc-200">
            <div>Thomas Wang</div>
            <div className="mt-2">Email: faihangllc@gmail.com</div>
            <div className="mt-2">Phone: 909-922-9887</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Faihang LLC. All trademarks belong to their respective owners.
      </footer>
    </main>
  );
}