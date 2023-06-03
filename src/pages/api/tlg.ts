import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prismaClient = new PrismaClient();

  const username = req.body.message.from.username;
  const verificationText = req.body.message.text;
  const date = req.body.message.date;

  await prismaClient.oTP.create({
    data: {
      username: username.toLowerCase(),
      verificationText: verificationText.toLowerCase(),
      used: false,
      date: date,
    },
  });

  return res.status(200).send("OK");
}
