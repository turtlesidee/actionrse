-- CreateTable
CREATE TABLE "RseMaturityAssessmentQuestion" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "responseA" TEXT NOT NULL,
    "responseB" TEXT NOT NULL,
    "responseC" TEXT NOT NULL,
    "responseD" TEXT NOT NULL,
    "valueA" INTEGER NOT NULL,
    "valueB" INTEGER NOT NULL,
    "valueC" INTEGER NOT NULL,
    "valueD" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "RseMaturityAssessmentQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RseQuizzQuestion" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "responseA" TEXT NOT NULL,
    "responseB" TEXT NOT NULL,
    "responseC" TEXT NOT NULL,
    "responseD" TEXT NOT NULL,
    "valueA" INTEGER NOT NULL,
    "valueB" INTEGER NOT NULL,
    "valueC" INTEGER NOT NULL,
    "valueD" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "RseQuizzQuestion_pkey" PRIMARY KEY ("id")
);
