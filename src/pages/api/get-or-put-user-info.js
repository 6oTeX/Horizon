import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Update Role
export default async function handler(req, res) {
  const { email, role } = req.body;

  if (req.method === "PUT") {
    const updateRole = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        role: role,
      },
    });
    res.status(200).json(updateRole);
  } else if (req.method === "GET") {
    const userInfo = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        email: true,
        role: true,
      },
    });
    res.status(200).json(userInfo);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
