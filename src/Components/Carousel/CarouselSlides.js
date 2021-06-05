import React from 'react'
import { Carousel } from 'react-bootstrap';
import './CarouselSlides.css'

function CarouselSlides() {
    return (
        <div>
            <Carousel className="ComponentCarousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-70 SlidesCarousel"
                        src="https://cdn.pixabay.com/photo/2016/01/02/00/42/lavender-1117275_960_720.jpg"
                        alt="Lavanda"
                    />
                    <Carousel.Caption className="text">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 SlidesCarousel"
                        src="https://cdn.pixabay.com/photo/2018/02/09/15/00/girl-3141766_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 SlidesCarousel"
                        src="https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_960_720.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default CarouselSlides
