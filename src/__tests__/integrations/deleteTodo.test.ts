import { resetDatabase, todoDatabase } from "../../database/database"
import { todoListMock } from "../__mocks__/todo.mocks"
import { request } from "../utils/request"

describe("Integration Test: delete", () => {
    beforeEach(() => {
        resetDatabase()
    })

    test("Deletar Itens", async () => {
        todoListMock.forEach(todo => todoDatabase.push(todo))

        const data = await request.delete("/todos/2").expect(200).then((response) => response.body)
        const data2 = await request.delete("/todos/6").expect(404).then((response) => response.body)

        expect(data).toBe("Item Deletado")
        expect(data2).toBe("Item não Encontrado")

        console.log(todoDatabase)
    })
})