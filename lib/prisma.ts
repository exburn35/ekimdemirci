import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Helper function to safely execute Prisma queries
export async function safePrismaQuery<T>(
  query: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    // Skip database queries during build if DATABASE_URL is not available
    if (!process.env.DATABASE_URL && process.env.NODE_ENV !== 'development') {
      return fallback
    }
    return await query()
  } catch (error) {
    console.error('Prisma query error:', error)
    return fallback
  }
}

