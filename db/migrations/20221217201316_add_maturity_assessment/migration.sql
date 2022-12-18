-- CreateTable
CREATE TABLE "RseMaturityAssessment" (
    "missionId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RseMaturityAssessment_missionId_questionId_key" ON "RseMaturityAssessment"("missionId", "questionId");

-- AddForeignKey
ALTER TABLE "RseMaturityAssessment" ADD CONSTRAINT "maturity" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseMaturityAssessment" ADD CONSTRAINT "RseMaturityAssessment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "RseMaturityAssessmentQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
