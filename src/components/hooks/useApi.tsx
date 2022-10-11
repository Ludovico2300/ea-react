import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { midiaSrc } from "../utils/ContentNav";

export type Axios = {
  path: string;
  user?: {
    email: string;
    password: string;
    username?: string;
  };
};

export function useApi(props: Axios) {

  const [tost, setTost]: any = useState();


  function fetchdata(props: Axios) {
    axios
      .post(`http://localhost:3030/EA-server/${props.path}`, props.user)

      .then((res) => {
        //save user in session storage
        sessionStorage.setItem("user", res.data.user)
       
       
        //find photo of user
        const findUser = midiaSrc.find((element)=> element.name == sessionStorage.getItem("user"))
        const midia = findUser? findUser.source : midiaSrc[5].source
        //@ts-ignore
        sessionStorage.setItem("source", midia)//save path of user photo 
        
        
        //set toast
        setTost(
          res.status === 200
            ? toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            : toast.error(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
        );
      });

  }

  return { fetch: fetchdata, toast: tost };
}
