import { Request, Response } from "express";
import { ITodo } from "../interfaces/todo.interfaces";
import { TodoServices } from "../services/todo.services";

export class TodoControllers{
    getMany(req: Request, res: Response): Response<ITodo[]>{
        const todoServices = new TodoServices();

        const response = todoServices.getMany();

        return res.status(200).json(response);
    }

    getToId(req: Request, res: Response) {
        const todoServices = new TodoServices();

        const response = todoServices.getToId(req.params.id)

        if(response != "Not Found") {
            return res.status(200).json(response)
        }else {
            return res.status(404).json(response)
        }
    }
    
    create(req: Request, res: Response): Response<ITodo>{
        const todoServices = new TodoServices();

        const response = todoServices.create(req.body);

        return res.status(201).json(response);
    }
}