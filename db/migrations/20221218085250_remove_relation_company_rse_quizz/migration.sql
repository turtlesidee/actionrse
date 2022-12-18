/*
  Warnings:

  - You are about to drop the column `companyId` on the `RseQuizz` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[missionId,questionId]` on the table `RseQuizz` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RseQuizz" DROP CONSTRAINT "RseQuizz_companyId_fkey";

-- DropIndex
DROP INDEX "RseQuizz_missionId_questionId_companyId_key";

-- AlterTable
ALTER TABLE "RseQuizz" DROP COLUMN "companyId";

-- CreateIndex
CREATE UNIQUE INDEX "RseQuizz_missionId_questionId_key" ON "RseQuizz"("missionId", "questionId");
