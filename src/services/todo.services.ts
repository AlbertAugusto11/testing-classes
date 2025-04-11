import { generateId, todoDatabase } from "../database/database";
import { ITodo, TCreateTodoBody } from "../interfaces/todo.interfaces";

export class TodoServices {
    getMany() {
        return todoDatabase;
    }

    getToId(id: string) {
        const getToId = todoDatabase.find(todo => todo.id === Number(id))

        if (getToId) {
            return getToId
        } else {
            return "Not Found"
        }
    }

    create(body: TCreateTodoBody): ITodo {
        const newTodo = { id: generateId(), ...body };

        todoDatabase.push(newTodo);

        return newTodo;
    }

    update(body: TCreateTodoBody, id: string) {
        const findTodo = todoDatabase.findIndex(todo => todo.id === Number(id))

        if(findTodo != -1) {
            const updateItem = {...body, id: Number(id)}
            todoDatabase.splice(findTodo,1,updateItem)

            return updateItem
        } else {
            
            return "Item não Encontrado"
        }
    }

    delete(id: string) {
        const findTodo = todoDatabase.findIndex(todo => todo.id === Number(id))

        if (findTodo != -1) {
            todoDatabase.splice(findTodo, 1)

            return "Item Deletado"
        } else {
            return "Item não Encontrado"
        }
    }

}