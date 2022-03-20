import { NextApiRequest, NextApiResponse } from "next";

export default function Webhooks (req: NextApiRequest, res: NextApiResponse) {
  console.log('Event recieved')
  res.status(200).json({ ok: true })
}
