import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Namangan = () => {
  const [url, setUrl] = useState('http://localhost:3000/regions?region=namangan')
  const { data, error, isPending } = useFetch(url)
  return (
    <main>
      <div className="container">
        <h1 className="cities_title">
          Namangan Viloyati
        </h1>
        <div className="cities_info">
          <div className="cities_info_text">
            <h3>
              Umumiy ma'lumotlar
            </h3>
            <p><b>Namangan</b> — Namangan viloyatidagi shahar. Viloyatning maʼmuriy, iqtisodiy va madaniy markazi Aholi soni boʻyicha Fargʻonadan oldingi oʻrinda. Oʻzbekistonning yirik shaharlaridan biri. Fargʻona vodiysining har jihatdan peshqadam viloyati. Vodiyning shimolida, Shim. Fargʻona kanali bilan Namangansoy kesishgan yerda, 450 m balandlikda joylashgan. Maydoni 83,3 ming km². Iyulning oʻrtacha harorati 26,3°, yanv.niki —2,3°. Aholisi 1mln ming kishi atrofida (2021)</p>
          </div>
          <div className="cities_info_bac">
            <video src="./videos/namangan.mov" autoPlay loop muted />
          </div>
        </div>
      </div>
      <ul className="cards container">
        {data && data.map((trip) => {
          return (
            <li className="cards__item" key={trip.id}>
              <img src={trip.img} width="267" height="160" />
              <div className="cards__item-inner">
                <h3 className="cards__title">{trip.name.charAt().toUpperCase() + trip.name.slice(1)} Tumani</h3>
                <p className="population">Tashkil etilgan sana: <span>{trip.since} yil</span></p>
                <p className="population">Aholi soni: <span>{trip.population} kishi</span></p>
                <p className="capital">Markazi: <span>{trip.cetral.charAt().toUpperCase() + trip.cetral.slice(1)}</span></p>
                <p className="capital">Maydoni: <span>{trip.area}km<sup>2</sup></span></p>
                <p className="capital">Aholi zichligi: <span>{trip.dencity ? trip.dencity : "Malumot topilmadi"} km<sup>2</sup></span></p>
                <p className="capital">Qo'shimcha ma'lumot: <span>{trip.info}</span></p>
              </div>
            </li>
          )
        })}
      </ul>
      <Carousel className='container'>
        <Carousel.Item interval={1000}>
          <img style={{ height: 500 }}
            className="d-block w-100"
            src="./bottomSliderImg/namangan/flowersFestival.jpg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img style={{ height: 500 }}
            className="d-block w-100"
            src="./bottomSliderImg/namangan/afsonaLand.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: 500 }}
            className="d-block w-100"
            src="./bottomSliderImg/namangan/masjid.jpg.crdownload"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img style={{ height: 500 }}
            className="d-block w-100"
            src="./bottomSliderImg/namangan/megaDrop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </main>
  )
}

export default Namangan