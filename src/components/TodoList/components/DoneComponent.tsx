import Icon from "@mui/material/Icon";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface IProps {
    done: boolean
};

const DoneComponent = ({ done }: IProps) => {
  return (
    <>
      {done ? (
        <Icon color="success">
          <CheckCircleIcon />
        </Icon>
      ) : (
        <Icon color="action">
          <DoNotDisturbAltIcon />
        </Icon>
      )}
    </>
  );
};

export default DoneComponent;