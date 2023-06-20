/*
  Warnings:

  - Added the required column `flightName` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "flightId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "children" INTEGER NOT NULL,
    "adults" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "picString" TEXT,
    "booked" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "flightName" TEXT NOT NULL
);
INSERT INTO "new_Booking" ("adults", "booked", "children", "email", "flightId", "id", "price") SELECT "adults", "booked", "children", "email", "flightId", "id", "price" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
