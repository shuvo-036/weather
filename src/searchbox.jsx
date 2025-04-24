
import { colors } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function Searchbox({updateinfo}){
let [city, setcity]=useState("")
let[error,seterror]=useState(false)
//put your api url and key here
const api_url="https://api.openweathermap.org/data/2.5/weather"
const api_key="7fd7e26e9a8d921e3ea94cceca14b940"

let getwaetherinfo= async()=>{
    try{
        let responce=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
let jsonresponce=await responce.json();
console.log(jsonresponce);
let result={
    city:city,
    temp:jsonresponce.main.temp,
    tempMin:jsonresponce.main.temp_min,
    tempMax:jsonresponce.main.temp_max,
    humidity:jsonresponce.main.humidity,
    country:jsonresponce.sys.country,
    weather:jsonresponce.weather[0].description
}
console.log(result)
return result
    }
catch(err){
throw err
}
}

let handelchange=(event)=>{
setcity(event.target.value)
}
let handelsubmit=async (event)=>{
try{
    event.preventDefault()
    console.log(city)
    setcity("")
    let newinfo= await getwaetherinfo()
    updateinfo(newinfo)
}catch(err){
    seterror(true)
}
}

    return(
        <div> <form action="" onSubmit={handelsubmit}> 
           
          
            <TextField  id="city" label="city-name" required variant="outlined" value={city}  onChange={handelchange}/>
            <br /><br />
          <div className='main2'> <Button  variant="contained" type='submit'>Submit</Button></div>
           {error && <p style={{color:"red"}}>No valid City</p> }
           
           </form>
            <br />
        
        </div>
    )

}
