/*
  Warnings:

  - You are about to drop the column `name` on the `message` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_message" ("date", "email", "id", "message") SELECT "date", "email", "id", "message" FROM "message";
DROP TABLE "message";
ALTER TABLE "new_message" RENAME TO "message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
