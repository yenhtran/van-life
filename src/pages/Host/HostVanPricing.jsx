import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
  let currentVan = useOutletContext();

  if (!currentVan) {
      return (
          <h1>Loading...</h1>
      )
  }
  return (
      <h3 className='host-van-price'>${currentVan.price}<span>/day</span></h3>
  )
}