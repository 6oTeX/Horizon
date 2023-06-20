const { PrismaClient } = require("@prisma/client");
const { now } = require("next-auth/client/_utils");
const prisma = new PrismaClient();

async function main() {
  try {
    const flights = [
      {
        name: "Ho Chi Minh City to Hanoi",
        from: "Ho Chi Minh City",
        to: "Hanoi",
        date: new Date("2023-06-08T10:00:00Z"),
        price: 150.0,
        desc: "This is a flight",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "San Francisco to Chicago",
        from: "San Francisco",
        to: "Chicago",
        date: new Date("2023-06-10T15:30:00Z"),
        price: 200.0,
        desc: "Flight from San Francisco to Chicago",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Dallas to Miami",
        from: "Dallas",
        to: "Miami",
        date: new Date("2023-06-12T12:45:00Z"),
        price: 180.5,
        desc: "Flight from Dallas to Miami",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Atlanta to New York",
        from: "Atlanta",
        to: "New York",
        date: new Date("2023-06-14T08:30:00Z"),
        price: 220.0,
        desc: "Flight from Atlanta to New York",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Seattle to Denver",
        from: "Seattle",
        to: "Denver",
        date: new Date("2023-06-16T11:15:00Z"),
        price: 185.75,
        desc: "Flight from Seattle to Denver",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Boston to San Francisco",
        from: "Boston",
        to: "San Francisco",
        date: new Date("2023-06-18T16:45:00Z"),
        price: 250.0,
        desc: "Flight from Boston to San Francisco",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Las Vegas to Phoenix",
        from: "Las Vegas",
        to: "Phoenix",
        date: new Date("2023-06-20T13:00:00Z"),
        price: 175.5,
        desc: "Flight from Las Vegas to Phoenix",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Houston to Washington D.C.",
        from: "Houston",
        to: "Washington D.C.",
        date: new Date("2023-06-22T09:45:00Z"),
        price: 190.0,
        desc: "Flight from Houston to Washington D.C.",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Orlando to Fort Lauderdale",
        from: "Orlando",
        to: "Fort Lauderdale",
        date: new Date("2023-06-24T14:20:00Z"),
        price: 165.25,
        desc: "Flight from Orlando to Fort Lauderdale",
        picString: "https://picsum.photos/200/300",
      },
      {
        name: "Chicago to Los Angeles",
        from: "Chicago",
        to: "Los Angeles",
        date: new Date("2023-06-26T17:30:00Z"),
        price: 270.0,
        desc: "Flight from Chicago to Los Angeles",
        picString: "https://picsum.photos/200/300",
      },
      // Add more flights with different names, dates, and prices as desired
    ];

    const bookings = [
      {
        flightId: 1,
        email: "jorranhoukes1@gmail.com",
        children: 0,
        adults: 1,
      },
      {
        flightId: 2,
        email: "jorranhoukes1@gmail.com",
        children: 3,
        adults: 1,
      },
      {
        flightId: 3,
        email: "jorranhoukes1@gmail.com",
        children: 2,
        adults: 1,
      },
      {
        flightId: 4,
        email: "jozef.fallouh2@gmail.com",
        children: 0,
        adults: 1,
      },
      {
        flightId: 5,
        email: "jozef.fallouh2@gmail.com",
        children: 2,
        adults: 1,
      },
      {
        flightId: 6,
        email: "jozef.fallouh2@gmail.com",
        children: 4,
        adults: 1,
      },
    ];

    const messages = [
      {
        firstName: "Jorran",
        lastName: "Houkes",
        phone: "1234567890",
        email: "jorranhoukes1@gmail.com",
        message: "Hello, I am Jorran Houkes",
      },
      {
        firstName: "Jozef",
        lastName: "Fallouh",
        phone: "0987654321",
        email: "jozef.fallouh2@gmail.com",
        message: "Hello, I am Jozef Fallouh",
      },
    ];

    for (const message of messages) {
      await prisma.message.create({
        data: message,
      });
    }
    for (const flight of flights) {
      await prisma.flight.create({
        data: flight,
      });
    }

    for (const booking of bookings) {
      await prisma.booking.create({
        data: booking,
      });
    }

    console.log("Flights created successfully");
  } catch (error) {
    console.error("Error creating flights:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
