import { generateId, todoDatabase } from "../database/database";
import { ITodo, TCreateTodoBody } from "../interfaces/todo.interfaces";

export class TodoServices{
    getMany(){
        return todoDatabase;
    }

    getToId(id: string) {
        const getToId = todoDatabase.find(todo => todo.id === Number(id))

        if(getToId){
            return getToId
        }else{
            return  "Not Found"
        }
    }

    create(body: TCreateTodoBody): ITodo{
        const newTodo = { id: generateId(), ...body };

        todoDatabase.push(newTodo);

        return newTodo;
    }


}