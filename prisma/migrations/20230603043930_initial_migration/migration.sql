-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "verificationText" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);
