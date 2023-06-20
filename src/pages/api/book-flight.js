import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { flightId, email, children, adults } = req.body;
  if (req.method === "POST") {
    console.log(req.body);
    const booking = await prisma.booking.create({
      data: {
        flightId: flightId,
        email: email,
        children: children,
        adults: adults,
      },
    });
    res.status(200).json(booking);
  } else if (req.method === "GET") {
    const grabBooking = await prisma.booking.findMany({
      where: {
        email: email,
      },
    });

    const flightIds = grabBooking.map((booking) => booking.flightId);

    if (flightIds.length === 0) {
      res.status(200).json([]); // No bookings found, return an empty array
      return;
    }

    const flights = await prisma.flight.findMany({
      where: {
        id: {
          in: flightIds,
        },
      },
    });

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
  } else {
    res.status(400).json({ error: "Invalid request method" });
  }
}
