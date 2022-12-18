-- CreateTable
CREATE TABLE "RseQuizzStakeholder" (
    "missionId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "stakeholderId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RseQuizz" (
    "missionId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RseQuizzStakeholder_missionId_questionId_stakeholderId_key" ON "RseQuizzStakeholder"("missionId", "questionId", "stakeholderId");

-- CreateIndex
CREATE UNIQUE INDEX "RseQuizz_missionId_questionId_companyId_key" ON "RseQuizz"("missionId", "questionId", "companyId");

-- AddForeignKey
ALTER TABLE "RseQuizzStakeholder" ADD CONSTRAINT "quizz_stakeholder" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseQuizzStakeholder" ADD CONSTRAINT "RseQuizzStakeholder_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "RseQuizzQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseQuizzStakeholder" ADD CONSTRAINT "RseQuizzStakeholder_stakeholderId_fkey" FOREIGN KEY ("stakeholderId") REFERENCES "RseStakeholder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseQuizz" ADD CONSTRAINT "quizz_stakeholder" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseQuizz" ADD CONSTRAINT "RseQuizz_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "RseQuizzQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseQuizz" ADD CONSTRAINT "RseQuizz_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
