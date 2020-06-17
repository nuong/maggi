import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselLanding = () => (
	<Carousel showArrows={true} >
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/1.jpeg" alt="" />
			<p className="legend">Legend 1</p>
		</div>
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/2.jpeg" alt="" />
			<p className="legend">Legend 2</p>
		</div>
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/3.jpeg" alt="" />
			<p className="legend">Legend 3</p>
		</div>
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/4.jpeg" alt="" />
			<p className="legend">Legend 4</p>
		</div>
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/5.jpeg" alt="" />
			<p className="legend">Legend 5</p>
		</div>
		<div>
			<img src="http://react-responsive-carousel.js.org/assets/6.jpeg" alt="" />
			<p className="legend">Legend 6</p>
		</div>
	</Carousel>
)



export default CarouselLanding
