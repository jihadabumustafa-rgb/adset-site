export default function Imprint() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Imprint</h1>
      <div className="mt-6 space-y-2 text-sm text-zinc-600">
        <div><span className="font-medium">Service:</span> AdSet</div>
        <div><span className="font-medium">Entity:</span> Digital Land BV</div>
        <div><span className="font-medium">VAT/BTW:</span> 0784.725.050</div>
        <div><span className="font-medium">Location:</span> Genk, Belgium</div>
        <div>
          <span className="font-medium">Contact:</span>{" "}
          <a className="underline" href="mailto:info@adset.tech">info@adset.tech</a>
        </div>
      </div>
    </main>
  );
}
