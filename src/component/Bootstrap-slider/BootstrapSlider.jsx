import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function BootstrapSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img style={{height: 200} }
          className="d-block w-100"
          src="../../../public/bottomSliderImg/namangan/flowersFestival.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{height: 200} }
          className="d-block w-100"
          src="../../../public/bottomSliderImg/namangan/afsonaLand.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: 200} }
          className="d-block w-100"
          src="../../../public/bottomSliderImg/namangan/masjid.jpg.crdownload"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: 200} }
          className="d-block w-100"
          src="../../../public/bottomSliderImg/namangan/megaAtraksion.jpg.crdownload"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: 200} }
          className="d-block w-100"
          src="../../../public/bottomSliderImg/namangan/megaDrop.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapSlider;