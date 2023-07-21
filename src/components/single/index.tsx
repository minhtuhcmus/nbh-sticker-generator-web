import React, { useState } from 'react';
import { IPrintDetail } from '../../interfaces/ItemRecord';
import CustomDocument from '../../components/Document';
import {PDFViewer} from '@react-pdf/renderer';
import cloneDeep from 'lodash/cloneDeep';


function AppSingle() {
  const [printDetails, setPrintDetails] = useState<IPrintDetail[]>([]);
  const [date, setDate] = useState('');

  const [showDoc, setShowDoc] = useState(false);
  return (
    <>
      <div className='data-input'>
        <input 
          type={"text"}
          placeholder="Ngày về kho"
          onChange={e => {
            e.preventDefault();
            setDate(e.target.value)}}
        />
        <input 
          type={"text"}
          placeholder="Tên hàng"
          onChange={e => {
            e.preventDefault();
            let temp = cloneDeep(printDetails);
            if (temp[0]) {
              temp[0].name = e.target.value;
            } else {
              let ne : IPrintDetail = {
                name: e.target.value,
                packaging: '',
                origin: '',
                provider: '',
                quantity: 0
              }
              temp.push(ne)
            }
            setPrintDetails(temp)}}
        />
        <input 
          type={"text"}
          placeholder="Xuất xứ"
          onChange={e => {
            e.preventDefault();
            let temp = cloneDeep(printDetails);
            if (temp[0]) {
              temp[0].origin = e.target.value;
            } else {
              let ne : IPrintDetail = {
                name: '',
                packaging: '',
                origin: e.target.value,
                provider: '',
                quantity: 0
              }
              temp.push(ne)
            }
            setPrintDetails(temp)}}
        />
        <input 
          type={"text"}
          placeholder="Nhà cung cấp"
          onChange={e => {
            e.preventDefault();
            let temp = cloneDeep(printDetails);
            if (temp[0]) {
              temp[0].provider = e.target.value;
            } else {
              let ne : IPrintDetail = {
                name: '',
                packaging: '',
                origin: '',
                provider: e.target.value,
                quantity: 0
              }
              temp.push(ne)
            }
            setPrintDetails(temp)}}
        />
        <input 
          type={"text"}
          placeholder="Quy cách"
          onChange={e => {
            e.preventDefault();
            let temp = cloneDeep(printDetails);
            if (temp[0]) {
              temp[0].packaging = e.target.value;
            } else {
              let ne : IPrintDetail = {
                name: '',
                packaging: e.target.value,
                origin: '',
                provider: '',
                quantity: 0
              }
              temp.push(ne)
            }
            setPrintDetails(temp)}}
        />

        <input 
          type={"number"}
          placeholder="Số tờ"
          onChange={e => {
            e.preventDefault();
            let temp = cloneDeep(printDetails);
            if (temp[0]) {
              temp[0].quantity = Number(e.target.value);
            } else {
              let ne : IPrintDetail = {
                name: '',
                packaging: '',
                origin: '',
                provider: '',
                quantity: Number(e.target.value)
              }
              temp.push(ne)
            }
            setPrintDetails(temp)}}
        />
        <button onClick={() => {
          console.log(printDetails);
          setShowDoc(!showDoc);
        }}>GenDoc</button>
      </div>
      
      {showDoc&&<PDFViewer width={'90%'} height={800}>
        <CustomDocument printDetails={printDetails} date={date}/>
      </PDFViewer>}
    </>
  );
}

export default AppSingle;
