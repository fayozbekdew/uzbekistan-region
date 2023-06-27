import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'
import { Carousel } from 'react-bootstrap'

const Toshkent = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions?region=toshkent')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    Toshkent Viloyati
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumy ma'lumotlar
                        </h3>
                        <p><b>Toshkent viloyati </b> — Oʻzbekiston Respublikasi tarkibidagi viloyat. Respublikaning shimoli-sharqida. 1938-yil 15-yanvarda tashkil kilingan. Shimoliy va shimoli-gʻarbdan Qozogʻiston Respublikasi, shimoli-sharqdan Qirgʻiziston Respublikasi, sharqdan Namangan viloyati, janubidan Tojikiston Respublikasi, janubi-gʻarbdan Sirdaryo viloyati bilan chegaradosh. Maydoni (Toshkent shahri maydonisiz) 15,3 ming km². Aholisi (Toshkent shahri aholisisiz) 2.931 million kishidan ziyod (2022). Viloyat tarkibida 15 ta tuman (Bekobod, Boʻka, Boʻstonliq, Zangiota, Oqqoʻrgʻon, Ohangaron, Parkent, Piskent, Chinoz, Yuqori Chirchiq, Yangiyoʻl, Oʻrta Chirchiq, Qibray, Quyi Chirchiq), 17 shahar (Angren, Bekobod, Boʻka, Doʻstobod, Keles, Olmaliq, Oqqoʻrgʻon, Ohangaron, Parkent, Piskent, Toshkent, Toʻytepa, Chinoz, Chirchiq, Yangiyoʻl, Yangiobod, Gʻazalkent), 18 shaharcha (Alimkent, Boʻzsuv, Gulbahor, Zafar, Iskandar, Krasnogorsk, Nurobod, Olmazor, Salor, Tuyaboʻgʻiz, Chigʻiriq, Chorvoq, Eshonguzar, Yangibozor, Yangi chinoz, Yangihayot, Oʻrtaovul, Qibray), 146 qishloq fuqarolari yigʻini bor. Markazi — Nurafshon shahri.</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="./videos/toshkent_video.mov" autoPlay loop muted />
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
                        src="./bottomSliderImg/toshkent/toshkent-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/toshkent/toshkent-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/toshkent/toshkent-2.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ height: 500 }}
                        className="d-block w-100"
                        src="./bottomSliderImg/toshkent/toshkent-4.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </main>
    )
}

export default Toshkent