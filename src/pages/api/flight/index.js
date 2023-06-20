import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, from, to, date, desc, picString } = req.body;
    const flight = await prisma.flight.create({
      data: {
        name: name,
        from: from,
        to: to,
        date: date,
        desc: desc,
        picString: picString,
      },
    });
    res.status(200).json(flight);
  }
  if (req.method === "GET") {
    const flight = await prisma.flight.findMany({
      take: 0,
    });
    res.status(200).json(flight);
  }

  if (req.method === "DELETE") {
    const flight = await prisma.flight.deleteMany({});
    res.status(200).json(flight);
  }
}

// model Flight {
//   id Int @id @default(autoincrement())
//   name String
//   from String
//   to String
//   date DateTime?
//   desc String?
//   picString String?
//   picBlob Bytes?
