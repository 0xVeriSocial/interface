import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { handler, otp } = req.body;

    const entry = await prismaClient.oTP.findFirst({
      where: {
        username: handler.toLowerCase(),
        verificationText: otp.toLowerCase(),
      },
      orderBy: [
        {
          date: "desc",
        },
      ],
    });

    return res.status(200).json({ data: !!entry });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({
      data: null,
      error: `HTTP method ${req.method} is not supported.`,
    });
  }
}
