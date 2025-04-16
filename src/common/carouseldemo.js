import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carouseldemo() {
  return (
    <div>
      <Carousel indicators=''>
        <Carousel.Item className='W-100'>
          <Image src="https://static.asianpaints.com/content/dam/asian_paints/services/banner-1-revised.webp" className='w-100' fluid />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://static.asianpaints.com/content/dam/asian_paints/services/banner-2.webp" className='w-100' fluid />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://static.asianpaints.com/content/dam/asian_paints/services/banner-3-revised.webp" className='w-100' fluid />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouseldemo;