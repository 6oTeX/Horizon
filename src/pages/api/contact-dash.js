import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// message's api
export default async function handler(req, res) {
  if (req.method === "GET") {
    // filter for specific specific message if search query is present
    const grabMessage = await prisma.message.findMany({});
    res.status(200).json(grabMessage);
  } else if (req.method === "POST") {
    const createMessage = await prisma.message.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
      },
    });
    res.status(200).json(createMessage);
  } else if (req.method === "DELETE") {
    const deleteMessage = await prisma.message.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(deleteMessage);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
