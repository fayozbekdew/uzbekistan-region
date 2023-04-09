import { useState } from 'react'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import '../../css/index.css'


const All = () => {
    const [url, setUrl] = useState('http://localhost:3000/regions')
    const { data, error, isPending } = useFetch(url)
    return (
        <main>
            <div className="container">
                <h1 className="cities_title">
                    O'zbekiston Respublikasi
                </h1>
                <div className="cities_info">
                    <div className="cities_info_text">
                        <h3>
                            Umumiy malumotlar
                        </h3>
                        <p><b>Oʻzbekiston</b> (rasman: Oʻzbekiston Respublikasi, Ўзбекистон Республикаси) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat. Oʻzbekistonning poytaxti Toshkent shahri boʻlib, davlat tili oʻzbek tili hisoblanadi. Maydoni — 448,978 km2. Aholi soni — 2022-yil 9 dekabr kuni O‘zbekiston aholisi 36 milliondan oshdi. Hozirda mamlakatning umumiy aholisi soni 36 001 236 nafarni tashkil qilmoqda. Pul birligi — soʻm. Oʻzbekiston Respublikasi hududi 12 ta viloyat, Toshkent shahri va Qoraqalpogʻiston Respublikasidan iboratdir, shuningdek, u mustaqil, demokratik, dunyoviy va konstitutsiyaviy davlat hisoblanadi. Oʻzbekiston MDH, BMT, YXHT va SHHT aʼzosidir. Oʻzbekiston qirgʻoqqa ega boʻlmagan besh mamlakat bilan, yaʼni: shimoldan Qozogʻiston; shimoli-sharqdan Qirgʻiziston; janubi-sharqdan Tojikiston; janubdan Afgʻoniston; va janubi-gʻarbiy qismida Turkmaniston bilan chegaradosh.</p>
                    </div>
                    <div className="cities_info_bac">
                        <video src="../../../public/videos/uzbekistan_respublic.jpeg" autoPlay loop muted />
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
                                <p className="capital">Qoshimcha malumot: <span>{trip.info}</span></p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default All