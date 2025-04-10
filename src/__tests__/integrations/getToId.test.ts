import { resetDatabase, todoDatabase } from "../../database/database"
import { todoListMock } from "../__mocks__/todo.mocks"
import { request } from "../utils/request"

describe("Integration Test: getToId", () => {
    beforeEach(()=> {
        resetDatabase()
    })

    test("Buscar item pelo Id", async () => {
        todoListMock.forEach(todo => todoDatabase.push(todo))

        const data = await request.get("/todos/1").expect(200).then((response) => response.body)
        const data2 = await request.get("/todos/3").expect(404).then((response) => response.body)

        expect(data).toStrictEqual(todoDatabase[0])
        expect(data2).toBe("Not Found")
    })
})

