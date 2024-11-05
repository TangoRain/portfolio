-- CreateTable
CREATE TABLE "Portfolios" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imgSrc" TEXT[],
    "dateCreated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PortfolioToPortfolios" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioToPortfolios_AB_unique" ON "_PortfolioToPortfolios"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioToPortfolios_B_index" ON "_PortfolioToPortfolios"("B");

-- AddForeignKey
ALTER TABLE "_PortfolioToPortfolios" ADD CONSTRAINT "_PortfolioToPortfolios_A_fkey" FOREIGN KEY ("A") REFERENCES "Portfolio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioToPortfolios" ADD CONSTRAINT "_PortfolioToPortfolios_B_fkey" FOREIGN KEY ("B") REFERENCES "Portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
