/*
  Warnings:

  - Added the required column `price` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Flight` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "price" DECIMAL NOT NULL,
    "desc" TEXT,
    "picString" TEXT,
    "picBlob" BLOB
);
INSERT INTO "new_Flight" ("date", "desc", "from", "id", "name", "picBlob", "picString", "to") SELECT "date", "desc", "from", "id", "name", "picBlob", "picString", "to" FROM "Flight";
DROP TABLE "Flight";
ALTER TABLE "new_Flight" RENAME TO "Flight";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
