import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Axios = {
  path: string;
  user: {
    email: string;
    password: string;
    username?: string;
  };
};

export function useApi(props: Axios) {
  const [response, setResponse]: any = useState();
  const [tost, setTost]: any = useState();


  function fetchdata(){
  axios
    .post(`http://localhost:3030/EA-server/${props.path}`, props.user)

    .then((res) => {
      setResponse(res);
      setTost(
        res.data.status === 200
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

  return { fetch:fetchdata, res: response, toast:tost } ;
}
