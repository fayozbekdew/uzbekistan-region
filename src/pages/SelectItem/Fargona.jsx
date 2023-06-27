import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'


const Fargona = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=fargona')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Farg'ona Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy ma'lumotlar
                        </h3>
                        <p><b>Fargʻona</b> (1907-yilgacha — Yangi Margʻilon; 1907—1924-yillarda Skobelev, mahalliy talaffuzda — Iskobil deb atalgan. Podsho Rossiyasining Oʻrta Osiyoni bosib olishda va keyingi yillarda koʻplab qirgʻinbarotlar uyushtirgan generali M. D. Skobelev nomiga qoʻyilgan) — Fargʻona viloyatining maʼmuriy, iktisodiy va madaniy markazi, respublikaning yirik shaharlaridan biri. Maydoni 0,09 ming km². Aholisi 222,4 ming kishi (2004, Fargʻona vodiysidagi shaharlar ichida aholi soni boʻyicha 3-oʻrinda). Shahar Fargʻona vodiysining jan. qismida, Olay togʻlarining etagida, 580 m balandlikda joylashgan. Iklimi kontinental. Oʻrtacha yillik temperatura 13°. Yanvarning oʻrtacha tempaturasi —2,7°, iyulniki 26,4°. Eng past temperatura 27°, eng yuqori temperatura 42°. Yiliga 192 mm yogʻin tushadi. Yogʻinning koʻp qismi qish va bahor fasllarida yogʻadi. Gʻarbdan baʼzan qattiq shamol va garmsel, Olay togʻi (Shohimardonsoy vodiysi)dan togʻvodiy shamoli esadi.</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="./videos/fergana_video.mov" autoPlay loop muted />
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
                        src="./bottomSliderImg/fergana/kirish.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/fergana/fargoniy.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/fergana/shohimardon.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/fergana/sport.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Fargona