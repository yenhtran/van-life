import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans))
  },[])

  const hostVansElements = vans.map((van) => (
    <Link to={van.id} className='host-van-link-wrapper' key={van.id}>
      <div className="host-van-single">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ))

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className='host-vans-list'>
        {
          vans.length > 0 ? (
            <section>
              {hostVansElements}
            </section>
          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </section>
  )
}