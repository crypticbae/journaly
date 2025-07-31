import { PrismaClient, UserRole, UserStatus } from '../src/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const adminEmail = 'admin@journaly.app'
  const adminPassword = 'admin123'
  
  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  })

  if (existingAdmin) {
    console.log('👤 Admin user already exists')
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Administrator',
        role: UserRole.ADMIN,
        status: UserStatus.APPROVED, // Admin is auto-approved
        approvedAt: new Date(),
        approvedBy: 'system'
      }
    })
    
    console.log('✅ Admin user created:', {
      id: admin.id,
      email: admin.email,
      role: admin.role
    })
  }

  console.log('🎉 Database seeding completed!')
  console.log('📧 Login as admin: admin@journaly.app / admin123')
  console.log('🚀 Users can now register and import their real trading accounts via email upload!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 