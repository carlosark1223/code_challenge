import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { ITodo } from "../../interfaces/index";
import { Box } from "@mui/system";
import DoneComponent from './components/DoneComponent';
import DescriptionComponent from './components/DescriptionComponent';

interface IProps {
  todos: ITodo[];
  handleStatus: Function;
  handleDelete: Function;
}

const TodoList = ({ todos, handleStatus, handleDelete }: IProps) => {

  const handleDeleteClick = (event:  React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.stopPropagation();
    handleDelete(id);
  }

  return (
    <Box mt={4}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Done</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ cursor: "pointer" }}
              onClick={() => handleStatus(todo.id)}
              hover
            >
              <TableCell component="th" scope="row">
                <DescriptionComponent todo={todo} />
              </TableCell>
              <TableCell>
                <DoneComponent done={todo.done} />
              </TableCell>
              <TableCell component="th" scope="row">
                <IconButton color="error" aria-label="delete" size="large" onClick={(e) => handleDeleteClick(e, todo.id)}>
                  <DeleteIcon fontSize="inherit"/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default TodoList;
