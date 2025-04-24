import { useState } from "react";
import Infobox from "./Info";

import Searchbox from "./searchbox";

export default function Weather(){

    let [weatherinfo, setweatherinfo]=useState({
        
    });


   

let updateinfo=(newinfo)=>{
    setweatherinfo(newinfo)

}


    return(
      <><div className="main"> 
      <h2>Welcome and 🤍 From Shuvo</h2>
      <Searchbox updateinfo={updateinfo}/>
      <Infobox info={weatherinfo}/>
      
      </div>
     <p style={{color:"red"}}>copywrite 2025</p>
      </>
      

     
    )
}
