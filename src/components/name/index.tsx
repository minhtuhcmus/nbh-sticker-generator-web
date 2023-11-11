import React from "react";
import { useReactToPrint } from "react-to-print";
import NameDoc from "./NameDoc";

function AppName() {
  const AppNameRef = React.useRef<HTMLDivElement>(null);

  const [text, setText] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [style, setStyle] = React.useState(1);

  const reactToPrintContent = React.useCallback(() => {
    return AppNameRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    removeAfterPrint: true,
  });

  return (
    <div className="name-app">
      <div className="data-input">
        <input
          type={"text"}
          placeholder="Tên hàng"
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value);
          }}
        />
        <input
          type={"number"}
          placeholder="Số tờ"
          onChange={(e) => {
            e.preventDefault();
            setQuantity(Number(e.target.value));
          }}
        />
        <select 
          value={style}
          onChange={e => {
            e.preventDefault()
            setStyle(Number(e.target.value))
          }

          }
        >
          <option value={1} key={1}>
            1 cột
          </option>
          <option value={2} key={2}>
            2 cột
          </option>
        </select>
      </div>

      <button onClick={handlePrint}>In nhãn</button>
      <NameDoc ref={AppNameRef} name={text} quantity={quantity} style={style} />
    </div>
  );
}

export default AppName;
