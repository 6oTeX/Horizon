import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, completed } = req.body;
    const todo = await prisma.todos.create({
      data: {
        title: title,
        completed: completed,
      },
    });
    res.status(200).json(todo);
  }
  if (req.method === "GET") {
    const todos = await prisma.todos.findMany();
    res.status(200).json(todos);
  }

  if (req.method === "DELETE") {
    const todo = await prisma.todos.deleteMany({});
    res.status(200).json(todo);
  }
}
