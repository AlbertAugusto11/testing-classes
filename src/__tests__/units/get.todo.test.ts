import { prisma } from "../../database/prisma"
import { TodoServices } from "../../services/todo.services"

describe("Unit test: getMany", () => {
    beforeEach( async () => {
        prisma.todo.deleteMany()
    })

    test("getMany", async () => {
        const todoService = new TodoServices()

        const data = await todoService.getMany()

        expect(data.length >= 0)
    })
})