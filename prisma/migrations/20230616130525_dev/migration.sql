-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "children" INTEGER,
    "adults" INTEGER NOT NULL,
    "booked" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "flightId" INTEGER NOT NULL,
    CONSTRAINT "Booking_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Booking" ("adults", "booked", "children", "email", "flightId", "id") SELECT "adults", "booked", "children", "email", "flightId", "id" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
