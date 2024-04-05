/*
  Warnings:

  - Made the column `gender` on table `employees` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `employees` MODIFY `gender` ENUM('MASCULINO', 'FEMININO', 'OUTRO') NOT NULL DEFAULT 'MASCULINO';
