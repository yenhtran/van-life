import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VanDetail(){
  const { id } = useParams();
  const [van, setVan] = useState({})

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [id])

  console.log(van)

  return (
    <div className='van-details-container'>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl}/>
          <i className={`van-type ${van.type} selected` }>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'><span>${van.price}</span>/day</p>
          <p>{van.desciption}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  )
}