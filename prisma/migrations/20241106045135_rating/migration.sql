-- CreateTable
CREATE TABLE "User" (
    "fullName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "subArea" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userName")
);

-- CreateTable
CREATE TABLE "technician" (
    "fullName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "subArea" TEXT NOT NULL,
    "Profession" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "ratings" DOUBLE PRECISION,
    "ratingCount" INTEGER DEFAULT 0,

    CONSTRAINT "technician_pkey" PRIMARY KEY ("userName")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "technicianId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ratingValue" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "technician_phoneNumber_key" ON "technician"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "technician_emailAddress_key" ON "technician"("emailAddress");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "technician"("userName") ON DELETE RESTRICT ON UPDATE CASCADE;
