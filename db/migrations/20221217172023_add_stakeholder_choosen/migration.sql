-- CreateTable
CREATE TABLE "RseStakeholderChoosen" (
    "missionId" INTEGER NOT NULL,
    "stakeholderId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "public_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RseStakeholderChoosen_missionId_stakeholderId_key" ON "RseStakeholderChoosen"("missionId", "stakeholderId");

-- AddForeignKey
ALTER TABLE "RseStakeholderChoosen" ADD CONSTRAINT "RseStakeholderChoosen_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RseStakeholderChoosen" ADD CONSTRAINT "RseStakeholderChoosen_stakeholderId_fkey" FOREIGN KEY ("stakeholderId") REFERENCES "RseStakeholder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
