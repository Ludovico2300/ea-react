import { Button } from "./utils/Button";
import Tab from "./utils/Tab";
import axios from "axios";
import { useState, useEffect } from "react";


export default function AllCardNews() {
  const [data, setData]:any = useState();

  useEffect(()=>{
    axios
        .get(`http://localhost:3030/EA-server/data`)
        .then((res) => {  setData(res.data[0].data) })

  },[])

  return (
    <>
      <div id="content-section">
        <h3 className="title-content">Ultime novità</h3>
        <br></br>
        <div className="card-content-container">
           {data?
            //@ts-ignore
            data.map((card:any) => (
              <Tab
                key={card.id}
                source={card.source}
                tag={card.tag}
                title={card.title}
                date={card.date}
                content={card.content}
              />
            )
            ):
            <h1>Loading..</h1>} 
        </div>
        <Button
          buttonSize="btn--medium"
          buttonStyle="btn--outline-black"

        >
          Ultime Novità
        </Button>

      </div>
    </>
  );
}

