import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'


const Andijon = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=andijon')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Andijon Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy ma'lumotlar
                        </h3>
                        <p><b>Andijon</b> — Oʻzbekistonning Andijon viloyatidagi shahardir. Viloyatning maʼmuriy, iqtisodiy va madaniy markazi. Oʻzbekistonning yirik industrial shaharlaridan biri. Shahar Fargʻona vodiysining sharqida  Andijonsoy yoqasida, dengiz sathidan 450 m balandlikda joylashgan. Iyulning oʻrtacha harorati 27 °C — 28 °C, yanvarniki — 3 °C. Aholisi 333,4 ming kishi (2000). Maydoni 74,3 km2. Andijon shahri shimoliy-gʻarbdan Oltinkoʻl tumani, gʻarbdan Buloqboshi tumani va janubiy-sharqdan Andijon tumani bilan chegaradosh</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/andijon_video.mov" autoPlay loop muted />
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
                                <p className="capital">Qo`shimcha ma'lumot: <span>{trip.info}</span></p>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/andijon/andijon-4.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/andijon/andijon-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/andijon/andijon-2.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/andijon/andijon-1.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Andijon