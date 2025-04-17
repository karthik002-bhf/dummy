import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MultiCarousel() {
    const carouselData = [
        { image: "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Srinivas%20Shyamanur.png?format=webp&width=640&quality=75", name: "Srinivas Shyamanur", designation: "Architect", company: "Asian Paints" },
        { image: "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Image.jpeg?format=webp&width=640&quality=75", name: "Rahul Sachan", designation: "Architect", company: "Asian Paints" },
        { image: 'https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2024-06/Mayank%20Agarwal%20-%20Dealer.png?VersionId=rUCjGjmHrTEyfrW_As1LxTGkWoVfhTyt&format=webp&width=640&quality=75', name: "Mayank Agarwal", designation: "Dealer", company: "Asian Paints" },
        { image: 'https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2024-06/Sagar%20Sawant%20-%20Contractor.png?VersionId=DTmz5RvReWdD4fhTqCqxJsgTKsb_v6_j&format=webp&width=640&quality=75', name: "Sagar Sawant", designation: "Contractor", company: "Asian Paints" },
        { image: 'https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2024-06/Navnath%20Khule%20-%20Contractor.png?VersionId=lyu2QV7iVDIoPY5HrZuFb4IESWbRBVGc&format=webp&width=640&quality=75', name: "Navnath Khule", designation: "Contractor", company: "Asian Paints" },
        { image: 'https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2023-10/Ar.%20Bhupinder%20Prabhakar.png?format=webp&width=640&quality=75', name: "Bhupinder Prabhakar", designation: "Architect", company: "Asian Paints" },
        { image: 'https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2024-06/Chandrakant%20Satre%20-%20Contractor.png?VersionId=NHRx09ctHexYYAGwc6gBNXKpL63_BG4f&format=webp&width=640&quality=75', name: "Chandrakant Satre", designation: "Contractor", company: "Asian Paints" },
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='mt-5 mb-2'>
            <div className='text-center my-4'>
                <h2>Customer Testimonials</h2>
                <p>Read Our Valued Customers' Testimonials</p>
            </div>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    carouselData.map((item, index) => {
                        return (
                            <div key={index} className='text-center p-2 mx-2 mb-1' style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                <div className='' style={{ width: "200px", height: "200px", overflow: "hidden", borderRadius: "50%", margin: "0 auto" }}>
                                    <Image src={item.image} alt={item.name} className='' fluid />
                                </div>
                                <h5>{item.name}</h5>
                                <p>{item.designation}</p>
                                <p>{item.company}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis eu felis vitae rutrum. Aenean sed gravida lectus, sed pellentesque enim. Aenean quis leo ac ex imperdiet vulputate quis quis ex. Etiam imperdiet luctus metus a rhoncus. Pellentesque auctor enim ac pretium porttitor. Curabitur vel efficitur orci. Aliquam erat volutpat. Mauris sollicitudin varius convallis. Cras turpis ex, tempor eget sollicitudin quis, condimentum sit amet eros.</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default MultiCarousel
