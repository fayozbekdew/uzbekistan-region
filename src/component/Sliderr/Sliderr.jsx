import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Link } from 'react-router-dom';
import React from 'react'
import './Slider.css'

const Sliderr = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            className="container"
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='all' >
                <Link  className='slider-card__item' to="/all">
                    <h4>All</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='slid namangan'>
            <Link className='slider-card__item' to="/namangan">
                    <h4>Namangan</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='fergana'>
                <Link className='slider-card__item' to="/fargona">
                    <h4>Fargona</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='andijon'>
                <Link className='slider-card__item' to="/andijon">
                    <h4>Andijon</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='toshkent'>
                <Link className='slider-card__item' to="/toshkent">
                    <h4>Toshkent</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='samarqand'>
                <Link className='slider-card__item' to="/samarqand">
                    <h4>Samarqand</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='jizzax'>
                <Link className='slider-card__item' to="/jizzax">
                    <h4>Jizzax</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='buxoro'>
                <Link className='slider-card__item' to="/buxoro">
                    <h4>Buxoro</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='surxondaryo'>
                <Link className='slider-card__item' to="/surxondaryo">
                    <h4>Surxondaryo</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='qashqadaryo'>
                <Link className='slider-card__item' to="/qashqadaryo">
                    <h4>Qashqadaryo</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='sirdaryo'>
                <Link className='slider-card__item' to="/sirdaryo">
                    <h4>Sirdaryo</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='xorazm'>
                <Link className='slider-card__item' to="/xorazm">
                    <h4>Xorazm</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='qoraqalpogiston'>
                <Link className='slider-card__item' to="/qoraqalpogiston">
                    <h4>Qoraqalpog`iston</h4>
                    <div className="btn-read">
                    <button>Read More</button>
                    <img src="../../../public/images/right-arrow.png" alt="right-arrow" height={20} width={30} />
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default Sliderr