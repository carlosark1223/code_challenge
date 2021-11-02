interface IProps {
  todo: {
    done: boolean;
    description: string;
  };
}

const DescriptionComponent = ({ todo }: IProps) => {
  return (
    <>
      <span style={todo.done ? { textDecoration: "line-through" } : {}}>
        {todo.description}
      </span>
    </>
  );
};

export default DescriptionComponent;
