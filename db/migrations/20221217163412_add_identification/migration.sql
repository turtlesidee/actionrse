-- CreateTable
CREATE TABLE "RseIdentification" (
    "missionId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RseIdentification_missionId_value_type_key" ON "RseIdentification"("missionId", "value", "type");

-- AddForeignKey
ALTER TABLE "RseIdentification" ADD CONSTRAINT "identification" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
