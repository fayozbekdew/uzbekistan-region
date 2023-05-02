import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Xorazm = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=xorazm')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Xorazm Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy ma'lumotlar
                        </h3>
                        <p><b>Xorazm</b> (arabcha: خوارزم) — Amudaryo sohillarida markazga ega Oʻrta Osiyo qadimiy mintaqasi — qadimiy davlat[1][2][3] va rivojlangan irrigatsiyali dehqonchilik, hunarmandlik va savdo mintaqasi. Xorazm orqali Buyuk Ipak yoʻli oʻtgan. III asr oxirlarida Xorazm poytaxti Kat shahri boʻlgan; X asr oxirlarida poytaxt Urganch shahriga koʻchiriladi (hozirgi Koʻhna Urganch shahri).
                            Xorazm hududi qadimda Amudaryo adoqlaridan janubga tomon Murgʻob va Tajan daryolarining yuqori oqimlarigacha choʻzilgan.</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/xorazm_video.mov" autoPlay loop muted />
                    </div>
                </div>
            </div>
            <ul className="cards container" >
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
                        src="../../../public/bottomSliderImg/xoramz/xorazm-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/xoramz/xorazm-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/xoramz/xorazm-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/xoramz/xorazm-4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Xorazm