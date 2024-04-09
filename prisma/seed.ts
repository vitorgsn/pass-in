import { prisma } from "../src/lib/prisma"

async function seed() {
    await prisma.event.create({
        data: {
            id: "d98bc2dd-87a9-425a-8a06-faf4150b8a26",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para devs apaixonados por código!",
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})