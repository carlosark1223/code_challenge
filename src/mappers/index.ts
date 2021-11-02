import { ITodo, IPostPutRequest } from "../interfaces/index";

export const mapGetTodos = (responseData: any): any => {
  const todos = Object.entries(responseData);
  return todos.map(([ id, todo ]: any) => ({
    id: id,
    description: todo.description,
    done: todo.done,
  }));
};

export const mapPostTodo = (payload: IPostPutRequest): IPostPutRequest => ({
  description: payload.description,
  done: payload?.done || false,
});

export const mapPutTodo = (payload: ITodo): IPostPutRequest => ({
  description: payload.description,
  done: payload.done,
});
