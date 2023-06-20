import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { email, id } = req.query;

  if (req.method === "GET") {
    const grabBooking = await prisma.booking.findMany({});

    const flights = await prisma.flight.findMany({});

    const bookedFlights = grabBooking.map((booking) => {
      const flight = flights.find((flight) => flight.id === booking.flightId);
      return {
        id: booking.id,
        email: booking.email,
        children: booking.children,
        adults: booking.adults,
        booked: booking.booked,
        flightId: booking.flightId,
        flight: flight,
        price: flight.price,
        flightName: flight.name,
        flightFrom: flight.from,
        flightTo: flight.to,
        flightDate: flight.date,
        flightDesc: flight.desc,
        flightPicString: flight.picString,
        flightPicBlob: flight.picBlob,
      };
    });

    res.status(200).json(bookedFlights);
  } else if (req.method === "DELETE") {
    const deleteBooking = await prisma.booking.delete({
      where: {
        id: parseInt(req.query.id),
      },
    });
    res.status(200).json(deleteBooking);
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
