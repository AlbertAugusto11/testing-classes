import { User } from "../../classes/user.classes"
import { dataBase, resetDataBase } from "../../dataBase/dataBase"

describe("Unit test: User Classe", () => {
    //// beforeEach, beforeAll, afterEach, afterAll

    beforeEach(() => {
        resetDataBase()
    })
    
    test("criar novo usuario", () => {
        const user = new User()
        const data = user.create({name: "Albert", email: "albert@email.com"})

        expect(data).toStrictEqual({
            id: 1,
            name: "Albert",
            email: "albert@email.com"
        })
    })

    test("ler dataBase", () => {
        dataBase.push({
            id: 1,
            name: "Flavia",
            email: "flavia@email.com"
        })
        
        const user = new User()

        expect(user.read()).toHaveLength(1)
    })
})