import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Samarqand = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=samarqand')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Samarqand Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Relyef hususiyatlari
                        </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum voluptatibus esse? Distinctio assumenda, ipsam, fuga corrupti laborum minima corporis omnis dicta, pariatur quod facilis eaque id tenetur magni aliquid consequatur ullam dignissimos fugit ex quo vel quidem repellendus. Libero iusto quas iure, in deleniti sunt modi autem dignissimos eaque.</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/samarqand__video.mov" autoPlay loop muted />
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
                        src="../../../public/bottomSliderImg/samarqand/samarqand-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/samarqand/samarqand-2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/samarqand/samarqand-3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="../../../public/bottomSliderImg/samarqand/samarqand-4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Samarqand