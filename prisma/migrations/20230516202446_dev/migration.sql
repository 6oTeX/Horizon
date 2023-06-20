/*
  Warnings:

  - You are about to drop the column `pic` on the `Flight` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Flight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "date" DATETIME,
    "desc" TEXT,
    "picString" TEXT,
    "picBlob" BLOB
);
INSERT INTO "new_Flight" ("date", "desc", "from", "id", "name", "to") SELECT "date", "desc", "from", "id", "name", "to" FROM "Flight";
DROP TABLE "Flight";
ALTER TABLE "new_Flight" RENAME TO "Flight";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
