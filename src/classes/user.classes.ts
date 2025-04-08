import { createId, dataBase } from "../dataBase/dataBase"

export interface IUser {
    id: number,
    name: string,
    email: string
}

export class User {
    create (user: Omit<IUser,"id">) {
        const newUser = {id: createId(), name: user.name, email: user.email}
        dataBase.push(newUser)

        return newUser
    }

    read () {
        return dataBase
    }
}