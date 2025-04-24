import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function Infobox({info}){

//put your image url here
    const init_url="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
   let cold="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D"
   let rain = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdHxlbnwwfHwwfHx8MA%3D%3D";
   let hot = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGR8ZW58MHx8MHx8fDA%3D";
   


    return(
        <div className='info'>
            {/* <h2>weatherinfo-{info.weather}</h2> */}
            <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>70? rain: info.temp>15? hot:cold
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p> Temperature:{info.temp}&deg;C</p>
         <p> Feels Like:{info.weather}</p>
  <p>TemMax:{info.tempMax}</p>
  <p>TemMin:{info.tempMin}</p>
         <p>Humidity:{info.humidity}</p>
       <p>Country:{info.country}</p>
        </Typography>
      </CardContent>
      {/* <p style={{color:"green"}}>Thanks and Love from Shuvo</p> */}
      <p>Create by <b>Golam Moniruzzaman 😊</b></p>
    </Card>
        </div>
    )
}
