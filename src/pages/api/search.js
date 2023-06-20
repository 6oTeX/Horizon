import { PrismaClient } from "@prisma/client";
import { startOfDay, endOfDay, subDays } from "date-fns";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { searchName, searchDate } = req.query;

  if (req.method === "POST") {
    const formattedDate = new Date(searchDate);
    const startDate = startOfDay(subDays(formattedDate, 4));
    const endDate = endOfDay(subDays(formattedDate, -6));

    const flight = await prisma.flight.findMany({
      where: {
        name: {
          contains: searchName,
        },
        date: {
          gte: startDate.toISOString(),
          lte: endDate.toISOString(),
        },
      },
    });

    res.status(200).json(flight);
  } else if (req.method === "GET") {
    const flight = await prisma.flight.findMany({
      where: {
        id: {
          equals: parseInt(searchName),
        },
      },
    });

    res.status(200).json(flight);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
