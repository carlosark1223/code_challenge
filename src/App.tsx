import React, { useEffect, useState } from "react";
import { deleteTodo, getTodos, postTodo, putTodo } from "./api/index";
import { mapGetTodos } from "./mappers/index";
import { ITodo } from "./interfaces/index";
import TodoList from "./components/TodoList/index";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTodo(e.target.value);

  const handleClick = (): void => {
    if (!todo) return;
    postTodo({ description: todo, done: false }).then((response) => {
      const newTodo: ITodo = {
        id: response.data.name,
        description: todo,
        done: false,
      };
      setTodos((prevState: ITodo[]) => [...prevState, newTodo]);
      setTodo("");
    });
  };

  const handleStatus = (id: string): void => {
    const updateTodo: ITodo | undefined = todos.find(
      (todo: ITodo) => todo.id === id
    );

    if (updateTodo) {
      putTodo({ ...updateTodo, done: !updateTodo.done }).then(() => {
        setTodos((prevState: ITodo[]) =>
          prevState.map((todo) =>
            todo.id === id ? { ...updateTodo, done: !updateTodo.done } : todo
          )
        );
      });
    }
  };

  const handleDelete = (id: string) => {
    deleteTodo(id).then(() => {
      setTodos((prevState) =>
        prevState.filter((todo: ITodo) => todo.id !== id)
      );
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  useEffect(() => {
    getTodos().then(({ data }) => {
      if (!data) setTodos([]);
      else setTodos(mapGetTodos(data));
    });
  }, []);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            TODO List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "7rem" }}>
        <TodoForm
          todo={todo}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
        />

        <TodoList
          todos={todos}
          handleStatus={handleStatus}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
}

export default App;
