import Banner from "./home/Banner";
import Coverage from "../coverage/Coverage";
import LatestBooks from "./home/LatestBooks";
import WhyChooseUs from "./home/WhyChooseUs";
import Services from "./home/Services";
import HowItWorks from "./home/HowItWorks";
import OurImpact from "./home/OurImpact";
import Testimonials from "./home/Testimonials";
import CTA from "./home/CTA";
import FAQ from "./home/FAQ";

function Home() {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <Coverage />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <OurImpact />
      <div className="py-5 graybg bg-cover bg-gray-100">
        <Testimonials />
      </div>
      <CTA />
      <div className="py-5 graybg bg-cover bg-gray-100">
        <FAQ />
      </div>
    </div>
  );
}

export default Home;
