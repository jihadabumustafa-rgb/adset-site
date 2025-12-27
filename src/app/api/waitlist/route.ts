export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const email = String(formData.get("email") || "").trim().toLowerCase();
    // Honeypot (spam trap): if filled, silently accept but do nothing
    const hp = String(formData.get("company") || "").trim();

    if (hp) {
      return new Response(null, { status: 204 });
    }

    if (!email || !email.includes("@")) {
      return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      return Response.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const url = `https://api.convertkit.com/v3/forms/${encodeURIComponent(formId)}/subscribe`;

    const kitRes = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        fields: { source: "adset.tech" },
      }),
    });

    const text = await kitRes.text();
    if (!kitRes.ok) {
      return Response.json(
        { ok: false, error: "Kit subscribe failed", details: text.slice(0, 500) },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    return Response.json(
      { ok: false, error: "Unexpected error", details: String(e?.message || e) },
      { status: 500 }
    );
  }
}
