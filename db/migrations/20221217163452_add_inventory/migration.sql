-- CreateTable
CREATE TABLE "RseInventory" (
    "missionId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "RseInventory_missionId_value_type_key" ON "RseInventory"("missionId", "value", "type");

-- AddForeignKey
ALTER TABLE "RseInventory" ADD CONSTRAINT "inventory" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
