import React from 'react'
import './Main.css'

const Main = () => {
  // const sateliteImg = '../../../public/images/Uzbekistan-Satellite-Map.png'
  return (
    <div className='container'>
      <section className="map">
        <div className="map__info">
          <h1 className="map__info__title">
            O'zbekiston joylashuvi
          </h1>
          <p className="map__info__text">
          Oʻzbekiston Markaziy Osiyodagi quruq, quruqlikka chiqmaydigan davlat boʻlib, katta choʻllarga ega. U beshta davlat, jumladan shimolda Qozog'iston, shimoliy-sharqda Qirg'iziston, janubiy-sharqda Tojikiston, janubda Afg'oniston va janubiy-g'arbda Turkmaniston bilan chegaradosh.
         Toshkent Oʻzbekistonning poytaxti va eng yirik shahri boʻlib, shimoliy-sharqda Qozogʻiston bilan chegarada joylashgan. Boshqa yirik shaharlarga Samarqand, Fargʻona va Namangan kiradi.
          </p>
        </div>
        <div className="map__bac">
        </div>
      </section>
      <hr className="site-hr" />
      <section className="satelite__map">
        <div className="satelite__map__images">
          <img src="./images/Uzbekistan-Satellite-Map.png" alt="" />
        </div>
        <h1 className="satelite__title">
          Sun'iy yo`ldosh ma'lumotlari
        </h1>
        <p className="satelite__text">
        Oʻzbekiston 447.400 kvadrat kilometr (172.700 kvadrat milya) maydonni egallaydi. Taqqoslash uchun, Turkmanistondan kichikroq,  Marokashdan kattaroq. Orol dengizi bir vaqtlar O‘zbekiston shimolidagi dunyodagi eng katta 4-ko‘l edi. Ammo unga quyiladigan daryolarning o'zgargan suv oqimi sababli u qisqarib, qisman qurib qolgan. Qizilqum choʻli Oʻzbekistonning markaziy mintaqasini egallagan 15-chi yirik choʻldir. G'arbda Ustyurt platosi joylashgan. Oʻzbekistonning aholisi eng zich  hududi mamlakatning sharqiy tomonida joylashgan.
        </p>
      </section>
      <hr className="site-hr" />
      <section  className="relyef__map">
        <img className='hildshade__img' src="../../../public/images/relyef-map.webp" alt="hillshade-map" />
        <h1 className="satelite__title">
          Balandlik ma'lumotlari
        </h1>
        <p className="satelite__text">
        Oʻzbekiston past adirlar, platolar, tekisliklar va togʻlar bilan kesishgan tekisliklardan tashkil topgan. Masalan, Ustyurt platosi Oʻzbekiston shimoliy-gʻarbida Orol dengizi va Amudaryo oraligʻida joylashgan. Toʻgʻridan-toʻgʻri platoning yonida sharqda Turon past tekisligi joylashgan. Oʻzbekistonning eng baland mintaqasi Hisor tizmasi boʻlib, Tojikistondan Oʻzbekistonga choʻzilgan. Balandligi 4643 metr (15233 fut) boʻlib, Pomir togʻlaridagi Hisor tizmasining bir qismi boʻlgan Oʻzbekistondagi eng baland choʻqqidir.
        </p>
      </section>
        <div className="google-maps">
          <h1>Googledan ko`rish</h1>
          <a target="_blank" href="https://www.google.com/maps/place/%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.381166,64.608575,6z/data=!3m1!4b1!4m6!3m5!1s0x38ae8b20a5d676b1:0xca0a6dad7e841e20!8m2!3d41.377491!4d64.585262!16zL20vMDd0X3g">
          <img src="../../../public/images/google-maps.png" alt="google-maps" width={100} height={100} />
        </a>
        </div>
    </div>
  )
}

export default Main