// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`, {
        method: req.method,
        body: req.body,
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error API" });
  }
}
