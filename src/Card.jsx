import React from 'react';
import './Card.css';

function Card(props)
{
    return (
        <div className="card">
            <img src={props.image}/>
            {
               props.screen == "home" && <div className="icon" onClick={props.onclick} title="Add to Favorites">
                    &hearts;
                </div>
            }

            {
                props.screen == "fav" && <div className="icon" onClick={props.onclick} title="Remove from Favorites">
                    &#10060;
                </div>
            }
        </div> 
    )

}

export default Card;