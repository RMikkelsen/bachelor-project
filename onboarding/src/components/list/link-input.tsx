import "../../app.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useStore from "../../store";
import React from "react";

// type LinkInputProps = {
//   onSubmit?: (text?: string) => void;
// };

const LinkInput = () => {
  const [text, setText] = React.useState<string>("");
  const add = useStore((state) => state.addLink);
  console.log(LinkInput);
  return (
    <>
      <label>
        <input
          className="input"
          placeholder="add your link / article"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <AddCircleIcon
          className="yellow"
          color="inherit"
          onClick={() => {
            if (text) {
              add(text);
              setText("");
            }
          }}
        />
      </label>
    </>
  );
};
export default LinkInput;
