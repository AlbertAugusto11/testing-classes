import { userMoks, userMoksId } from "../../__moks__/user.moks"
import { User } from "../../classes/user.classes"
import { dataBase, resetDataBase } from "../../dataBase/dataBase"

describe("Unit test: User Classe", () => {
    //// beforeEach, beforeAll, afterEach, afterAll

    beforeEach(() => {
        resetDataBase()
    })
    
    test("criar novo usuario", () => {
        const user = new User()
        const data = user.create(userMoksId)

        expect(data).toStrictEqual(userMoks)
    })

    test("ler dataBase", () => {
        dataBase.push(userMoksId)
        
        const user = new User()

        expect(user.read()).toHaveLength(1)
        expect(dataBase[0]).toStrictEqual(userMoks)
    })
})