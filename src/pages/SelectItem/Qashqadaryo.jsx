import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Qashqadaryo = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=qashqadaryo')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Qashqadaryo Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy ma'lumotlar
                        </h3>
                        <p> <b>Qashqadaryo viloyati</b> — Oʻzbekiston Respublikasi tarkibidagi viloyat. 1924-yil 1-noyabrda tashkil etilgan. Respublikaning janubi-gʻarbida, Qashqadaryo havzasida, Pomir-Oloy togʻ tizmasining gʻarbiy chekkasida, Amudaryo va Zarafshon daryolari, Hisor va Zarafshon tizma togʻlari orasida. Shimoli-gʻarbdan Buxoro va janubi-sharqdan Surxondaryo viloyatlari, janubi-gʻarb va gʻarbdan Turkmaniston Respublikasi, sharqdan Tojikiston Respublikasi hamda Samarqand viloyati bilan chegaradosh. Maydoni 28,6 ming km². Aholisi 3,408,300 kishi (3-oʻrin) (2022). Viloyat hokimi Murotjon Azimov (2021-yil 18-noyabrdan) Tarkibida 14 tumani (Dehqonobod, Kasbi, Kitob, Koson, Koʻkdala tumani), Mirishkor, Muborak, Nishon, Qamashi, Qarshi, Yakkabogʻ, Gʻuzor, Shahrisabz, Chiroqchi, 12 shahar (Beshkent, Kitob, Koson, Muborak, Tallimarjon, Chiroqchi, Shahrisabz, Yakkabogʻ, Yangi Nishon, Qamashi, Qarshi, Gʻuzor), 4 shaharcha (Yangi Mirishkor,Dehqonobod, Miroqi, Eski Yakkabogʻ, Pomuq), 147 qishloq fuqarolari yigʻini, 1064 qishloq bor</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/qashqadaryo_video.mov" autoPlay loop muted />
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
                          <p className="capital">Qoshimcha ma'lumot: <span>{trip.info}</span></p>
                        </div>
                      </li>
                    )
                })}
            </ul>
            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qashqadaryo/qashqadarryo-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qashqadaryo/qashqadarryo-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qashqadaryo/qashqadarryo-4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qashqadaryo/qashqadarryo-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Qashqadaryo