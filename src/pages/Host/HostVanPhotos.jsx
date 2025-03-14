import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  let currentVan = useOutletContext();

  if (!currentVan) {
      return (
          <h1>Loading...</h1>
      )
  }
  return (
      <img src={currentVan.imageUrl} className='host-van-detail-image'/>
  )
}