import { prisma } from "../../database/prisma"
import { TodoServices } from "../../services/todo.services"
import { todoCreateBodyMock, todoListMock } from "../__mocks__/todo.mocks"

describe("Unit test: Update", () => {
    beforeEach( async () => {
        prisma.todo.deleteMany()
        prisma.todo.create({data: todoCreateBodyMock})
    })

    test("update", async () => {
        const todoService = new TodoServices()
        const todo = await prisma.todo.findMany() 

        const data = await todoService.update(todoCreateBodyMock, String(todo[0].id))

        expect(data).toStrictEqual(todo[0])
    })
})