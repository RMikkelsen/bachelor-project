import "../../app.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { FC, useState } from "react";

type LinkInputProps = {
  onSubmit?: (text?: string) => void;
};

const LinkInput: FC<LinkInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>();
  function resetInput() {
    setText("");
  }

  return (
    <>
      <label>
        <input
          className="input"
          placeholder="add your link / article"
          value={text}
          onChange={({ target }) => setText(target?.value)}
        />

        <BackspaceIcon className="orange" onClick={resetInput} />
        <AddCircleIcon
          className="yellow"
          color="inherit"
          onClick={() => onSubmit && onSubmit(text)}
        />
      </label>
    </>
  );
};
export default LinkInput;
