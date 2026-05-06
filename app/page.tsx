export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          GraphQL Query<br />
          <span className="text-[#58a6ff]">Cost Calculator</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Parse any GraphQL query, get an instant complexity score, spot expensive operations, and receive actionable optimization tips — before they hit production.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $13/mo
        </a>
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="text-xs text-[#8b949e] mb-2">Example output</div>
          <pre className="text-sm text-[#c9d1d9] overflow-x-auto">{`query GetUserFeed {
  user(id: "1") {          # cost: 1
    posts(first: 100) {    # cost: 100  ⚠ high
      comments {           # cost: 300  ⚠ N+1 risk
        author { name }    # cost: 300
      }
    }
  }
}

✦ Total score: 701  [EXPENSIVE]
⚡ Tip: Add pagination to comments, use DataLoader`}</pre>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {[
          { icon: '⚖', title: 'Complexity Scoring', desc: 'Field weights + depth analysis give a single cost number.' },
          { icon: '🔍', title: 'Hot-spot Detection', desc: 'Highlights the exact fields driving up your query cost.' },
          { icon: '💡', title: 'Optimization Tips', desc: 'Actionable suggestions: pagination, DataLoader, fragments.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              'Unlimited query analysis',
              'Depth + field weight scoring',
              'N+1 & hot-spot detection',
              'Optimization recommendations',
              'Schema-aware cost rules',
              'Export reports as JSON'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How is the complexity score calculated?',
              a: 'Each field carries a base weight (1 for scalars, higher for lists). The score multiplies weights by list sizes and nesting depth, then sums all fields in the query.'
            },
            {
              q: 'Does it need access to my GraphQL server?',
              a: 'No. You paste your query (and optionally your schema) into the tool. All analysis runs client-side — nothing is sent to a server.'
            },
            {
              q: 'What counts as an "expensive" query?',
              a: 'Queries scoring above 500 are flagged as expensive. Common culprits are unbounded list fields, deep nesting, and missing pagination arguments.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} GraphQL Query Cost Calculator
      </footer>
    </main>
  )
}
