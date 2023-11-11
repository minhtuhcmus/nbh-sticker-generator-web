import React from 'react'
import { useReactToPrint } from 'react-to-print';
import NameDoc from './NameDoc';

function AppName() {
  const AppNameRef = React.useRef<HTMLDivElement>(null);

  const [text, setText] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);


  const reactToPrintContent = React.useCallback(() => {
    return AppNameRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    removeAfterPrint: true
  });

  return (
    <div>
      <div className='data-input'>
        <input 
          type={"text"}
          placeholder="Tên hàng"
          onChange={e => {
            e.preventDefault();
            setText(e.target.value)
          }}
        />
        <input 
          type={"number"}
          placeholder="Số tờ"
          onChange={e => {
            e.preventDefault();
            setQuantity(Number(e.target.value))
          }}
        />
        </div>
      <button onClick={handlePrint}>
        In nhãn
      </button>
      <NameDoc ref={AppNameRef} name={text} quantity={quantity}/>
    </div>
  );
}

export default AppName