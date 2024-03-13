// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`)
    ).json();
    res.status(200).json(response);
  } catch (error) {
    console.log("error => ", error);
    res.status(500).json({ error: "Error API" });
  }
}
