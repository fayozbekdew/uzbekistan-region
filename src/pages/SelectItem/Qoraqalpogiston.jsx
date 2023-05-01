import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Qoraqalpogiston = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=qoraqalpogiston')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Qoraqalpogiston Respublikasi
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy malumotlar
                        </h3>
                        <p><b>Qoraqalpogʻiston</b> — Oʻzbekiston Respublikasi tarkibidagi respublika. Maydoni 166,6 ming km². Aholisi 2 millionga yaqin (2022). Respublika poytaxti — Nukus shahri. Tarkibida 16 tuman, 12 shahar, 14 shaharcha va 124 fuqarolar yigʻini bo</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/qoraqalpogiston.mov" autoPlay loop muted />
                    </div>
                </div>
            </div>
            <ul className="cards container">
                {data && data.map((trip) => {
                    return (
                        <li className="cards__item" key={trip.id}>
                            <a href="">
                                <img src={trip.img} width="267" height="160" />
                                <div className="cards__item-inner">
                                    <h3 className="cards__title">{trip.title}</h3>
                                    <p className="population">Aholi soni: <span>{trip.population}</span></p>
                                    <p className="region">Viloyat: <span>{trip.region}</span></p>
                                    <p className="capital">Markazi: <span>${trip.cetral}</span></p>
                                    <p className="capital">Maydoni: <span>{trip.area}km<sup>2</sup></span></p></div>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Carousel className='container'>
                <Carousel.Item interval={1000}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qoraqalpogiston/qoraqalpogiston-4.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qoraqalpogiston/qoraqalpogiston-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/qoraqalpogiston/qoraqalpogiston-2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../public/bottomSliderImg/qoraqalpogiston/qoraqalpogiston.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Qoraqalpogiston