import { resetDatabase, todoDatabase } from "../../database/database"
import { todoListMock, updateMock } from "../__mocks__/todo.mocks"
import { request } from "../utils/request"

describe("Integration Test: update", () => {
    beforeEach(() => {
        resetDatabase()
    })

    test("Update", async () => {
        todoListMock.forEach(todo => todoDatabase.push(todo))

        const data = await request.put("/todos/2").send(updateMock).expect(200).then((response) => response.body)
        const data2 = await request.put("/todos/10").send(updateMock).expect(404).then((response) => response.body)

        expect(data).toStrictEqual({...updateMock, id: 2})
        expect(data2).toBe("Item não Encontrado")
    })
})