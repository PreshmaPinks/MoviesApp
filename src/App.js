import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';

function App() {
  const [data, sedata]=useState('');
  const [favIds, setFavId]=useState([]);
  const [screen, setScreen] = useState('home');
  useEffect(()=>{fetch('https://api.tvmaze.com/shows')
                .then((result)=>result.json())
                .then((result)=>sedata(result))
                .catch((error)=>console.log(error))}
  ,[]);

  const pushMovie = id => {
    if(favIds.indexOf(id) == -1) {
      setFavId([...favIds, id])
    }
  }

  const removeMovie = id => {
    console.log(favIds.filter((item, i) => i !== id))
    setFavId(favIds.filter((item, i) => i !== id));
  }

  return (
    <>
    <div className="header">
      <div  onClick={() => setScreen('home')}> Movies App  </div>
      <div onClick={() => setScreen('fav')}>List &hearts; ({favIds.length})</div>
    </div>
    {screen == 'fav' &&
    <div>
      <div className="subHeader">
        <div>Favorites  </div> 
        <div onClick={() => setScreen('home')}> Back </div>
      </div>
        <div className="row">
          {
            favIds && favIds.map((item,index)=>
            {
              return <Card image={data[item].image.medium} name={data[item].name} screen={screen} onclick={() =>removeMovie(index)} key={index} />
            })
          }
        </div>
    </div>
    }

    {screen == 'home' && <div className="row">
      {
        data && data.map((item,index)=>
        {
          return <Card image={item.image.medium} name={item.name} onclick={() => pushMovie(index)} screen={screen} key={index} />
        })
      }
    </div>}
    </>
  );
}


export default App;
