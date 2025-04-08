import { IUser } from "../classes/user.classes"

export let dataBase: IUser[] = []
export const resetDataBase = () => {
    dataBase = []

}
export const createId = () => {
    let id = 0
    id++
    return id
}
