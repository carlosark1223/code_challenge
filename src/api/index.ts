import axios from "axios";
import { IPostPutRequest, ITodo } from '../interfaces/index';
import { mapPostTodo, mapPutTodo } from '../mappers/index';

const todoUrl = '/todos.json';

const todoUrlId = (id: string) => `/todos/${id}.json`;

export const baseURL = axios.create({
    baseURL: 'https://code-challenge01-default-rtdb.firebaseio.com',
    headers: { 'Content-Type': 'application/json' },
  });

export const getTodos = () => baseURL.get(todoUrl);
export const postTodo = (payload: IPostPutRequest) => baseURL.post(todoUrl, mapPostTodo(payload));
export const putTodo = (payload: ITodo) => baseURL.put(todoUrlId(payload.id), mapPutTodo(payload));
export const deleteTodo = (id: string) => baseURL.delete(todoUrlId(id));