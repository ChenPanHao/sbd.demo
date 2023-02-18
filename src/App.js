import "./styles.css";
import {useRef, useState } from "react";
import Select from 'react-select';
import PDF417 from "pdf417-generator";
import styled from "styled-components";

const BarcodeCanvas = styled.canvas`
  width: 100%;
`;

const CanvasContainer = styled.div`
  width: 400px;
  border-radius: 3px;
  padding: 10px;
  background-color: #fff;
`;

function App() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay)+"";
  switch(day.length){
    case 1:
      day = "00"+day;
      break;
    case 2:
      day = "0"+day;
      break;
  }

  const [options] = useState([
    { value: "M1THOMAS/LEE          E2DY736 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'THOMAS/LEE'},
    { value: "M1FU/SAUFAI           E2DY126 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'FU/SAUFAI'},
    { value: "M1MOHAMMED/ALSHAMERI  E2BB344 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'MOHAMMED/ALSHAMERI'},
    { value: "M1RUCHIKA/CHHIKARA    E2BZ396 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'RUCHIKA/CHHIKARA'},
    { value: "M1NONIE/MAK           E2ZZ116 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'NONIE/MAK'},
    { value: "M1JEFF/PU             E2RG556 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'JEFF/PU'},
    { value: "M1DANISH/AHMED        E8PF156 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'DANISH/AHMED'},
    { value: "M1SEAN/YU             E2VF152 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'SEAN/YU'},
    { value: "M1DANIEL/LAM          E9TT126 TPENCE6X 0534 "+day+"M001A0001 32C>2180      B   01721805880010E             0",label: 'DANIEL/LAM'}
  ]);

  const canvas = useRef(null);

  const handleChange = (event)=>{
    // <BarcodePdf417 value={event.value} autoWidthZoom={2}/>
    //<Barcode text={event.value} width={250} height={100} />
    if (canvas.current) {
      PDF417.draw(event.value, canvas.current, 3);
    }
  }
  return (
    <div>
      <Select 
      options={options} 
      onChange={event=>  handleChange(event)}
      />
      <CanvasContainer>
        <BarcodeCanvas ref={canvas} />
      </CanvasContainer>
    </div>
  );
}

export default App;
