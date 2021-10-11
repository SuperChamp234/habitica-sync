import * as React from "react";
import App from "./view/App";

export default function ReactView(props: any){
  return(
    <App username={props.userID} apiToken={props.tokenAPI}/>
  )
}