import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  console.log(id);
  if (req.method === "DELETE") {
    const flight = await prisma.flight.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(flight);
  }

  if (req.method === "GET") {
    const flight = await prisma.flight.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(flight);
  }

  if (req.method === "PUT") {
    const flight = await prisma.flight.update({
      where: {
        id: parseInt(id),
      },
      data: req.body,
    });
    res.status(200).json(flight);
  }

  res.end("");
}
