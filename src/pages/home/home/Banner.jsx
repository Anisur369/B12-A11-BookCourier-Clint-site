import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../../src/assets/banner/banner1.jpg';
import bannerImg2 from '../../../../src/assets/banner/banner2.jpg';
import bannerImg3 from '../../../../src/assets/banner/banner3.jpg';
import bannerImg4 from '../../../../src/assets/banner/banner4.jpg';

const bannerImages = [bannerImg1, bannerImg2, bannerImg3, bannerImg4];

function Banner() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={2000}>
            {bannerImages.map((image, index) => (
                <div className="w-full h-96" key={index}>
                    <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;