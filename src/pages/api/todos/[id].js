import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  console.log(id);
  if (req.method === "DELETE") {
    const todo = await prisma.todos.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(todo);
  }

  if (req.method === "GET") {
    const todo = await prisma.todos.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(todo);
  }

  if (req.method === "PUT") {
    const todo = await prisma.todos.update({
      where: {
        id: parseInt(id),
      },
      data: req.body,
    });
    res.status(200).json(todo);
  }

  res.end("");
}
