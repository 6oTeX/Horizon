import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//Grab all flights
export default async function handler(req, res) {
  if (req.method === "GET") {
    const flight = await prisma.flight.findMany();

    res.status(200).json(flight);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
