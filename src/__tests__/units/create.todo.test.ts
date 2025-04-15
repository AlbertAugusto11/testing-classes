import { prisma } from "../../database/prisma"
import { TodoServices } from "../../services/todo.services"
import { todoCreateBodyMock } from "../__mocks__/todo.mocks"

describe("Unit test: create", () => {
    beforeEach (async () => {
        prisma.todo.deleteMany()
    })

    test("create", async () => {
        const todoService = new TodoServices()

        const data = await todoService.create(todoCreateBodyMock)

        expect(data.id).toBeDefined()
        expect(data.content).toBe(todoCreateBodyMock.content)
        expect(data.title).toBe(todoCreateBodyMock.title)
    })
})