import { PDFViewer, Document } from "@react-pdf/renderer";
import React from "react";
// import { useReactToPrint } from "react-to-print";
import NamePageCustom from "./NamePage";

function AppName() {
  // const AppNameRef = React.useRef<HTMLDivElement>(null);

  const [text, setText] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [style, setStyle] = React.useState(1);

  // const reactToPrintContent = React.useCallback(() => {
  //   return AppNameRef.current;
  // }, []);

  // const handlePrint = useReactToPrint({
  //   content: reactToPrintContent,
  //   documentTitle: "AwesomeFileName",
  //   removeAfterPrint: true,
  // });

  function genPages() {
    let numPage = Math.floor(quantity/10);
    let rem = quantity%10;
    let pages : Array<any> = []
    for (let i = 0; i < numPage; i++) {
      pages.push(<NamePageCustom name={text} quantity={10}/>)
    }
    if (rem !== 0) {
      pages.push(<NamePageCustom name={text} quantity={rem}/>)
    }
    return pages
  }

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

      {/* <button onClick={handlePrint}>In nhãn</button>
      <NameDoc ref={AppNameRef} name={text} quantity={quantity} style={style} /> */}

      <PDFViewer width={'90%'} height={800}>
        <Document>
          {
            genPages()
          }
        </Document>
      </PDFViewer>
    </div>
  );
}

export default AppName;
