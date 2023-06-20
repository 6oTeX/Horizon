import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// schema's

// model Flight {
//   id Int @id @default(autoincrement()) // primary key
//   name String
//   from String
//   to String
//   date DateTime
//   price Decimal
//   desc String?
//   picString String?
//   picBlob Bytes?

//   bookings Booking[]
// }

// model Booking {
//   id Int @id @default(autoincrement())
//   email String // should relate to a User or Account
//   children Int?
//   adults Int

//   booked DateTime @default(now())

//   // relation to Flight
//   flight Flight @relation(fields: [flightId], references: [id] , onDelete: Cascade)
//   flightId Int // foreign key
// }

// const data = {
//   id: flightId,
//   name: name,
//   from: from,
//   to: to,
//   date: date,
//   price: price,
//   desc: desc,
//   picString: picString,
// };

export default async function handler(req, res) {
  const { email, id, name, from, to, date, price, desc, picString } = req.body;

  if (req.method === "GET") {
    const grabBooking = await prisma.booking.findMany({});

    const flights = await prisma.flight.findMany({});

    const flightExport = flights.map((flight) => {
      const totalBookingFlight = grabBooking.filter(
        (booking) => booking.flightId === flight.id
      ).length;
      return {
        id: flight.id,
        name: flight.name,
        from: flight.from,
        to: flight.to,
        date: flight.date,
        price: flight.price,
        desc: flight.desc,
        picString: flight.picString,
        picBlob: flight.picBlob,
        bookings: flight.bookings,
        totalBookingFlight: totalBookingFlight,
      };
    });

    res.status(200).json(flightExport);
  } else if (req.method === "DELETE") {
    const deleteBooking = await prisma.flight.delete({
      where: {
        id: parseInt(req.query.id),
      },
    });
    res.status(200).json(deleteBooking);
  } else if (req.method === "PUT") {
    const updateFlight = await prisma.flight.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        from: from,
        to: to,
        date: new Date(date),
        price: price,
        desc: desc,
        picString: picString,
      },
    });
    res.status(200).json(updateFlight);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
