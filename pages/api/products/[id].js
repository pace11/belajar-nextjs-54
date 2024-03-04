// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { query } = req;
  try {
    const response = await (
      await fetch(`https://dummyjson.com/products/${query?.id}`)
    ).json();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error API" });
  }
}
