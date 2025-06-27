import HeroSection from "./components/HeroSection";
import HomeAbout from "./components/HomeAbout";
import LogoSlider from "./components/LogoSlider";
import HomeServicesRow from "./components/HomeServicesRow";
import HomeReviews from "./components/HomeReviews";
import HomeGallery from "./components/HomeGallery";
import FAQ from "./components/FAQ";
import MainHeading from "./components/MainHeading";
import BentoCardWithIcon from "./components/BentoCardWithIcon";
import { whyus } from "./data";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <LogoSlider/>
      <HomeAbout/>
      <LogoSlider/>

      <div className='flex flex-col max-w-7xl mx-auto px-5 py-20 lg:py-40 gap-10 items-center'>
        <MainHeading>Why Choose Us</MainHeading>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        {whyus.map((why, index) => (
        <BentoCardWithIcon key={index} title={why.title} description={why.description} index={index} icon={why.icon} />
        ))}
        </div>
      </div>

      <HomeServicesRow/>
      <HomeReviews/>
      <HomeGallery/>
      <FAQ/>
    </>
  );
}
