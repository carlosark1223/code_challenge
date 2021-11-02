import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

interface IProps {
  todo: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TodoForm = ({ todo, onChange, onKeyDown, onClick }: IProps) => {
  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <TextField
          size="small"
          value={todo}
          onChange={onChange}
          onKeyDown={onKeyDown}
          label="Add a task"
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <Button variant="contained" onClick={onClick} disabled={!todo}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoForm;