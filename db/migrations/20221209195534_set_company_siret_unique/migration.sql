/*
  Warnings:

  - A unique constraint covering the columns `[siret]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Company_siret_key" ON "Company"("siret");
