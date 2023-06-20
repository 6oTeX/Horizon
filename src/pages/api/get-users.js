import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//Grab all flights
export default async function handler(req, res) {
  if (req.method === "GET") {
    const user = await prisma.user.findMany();

    res.status(200).json(user);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
