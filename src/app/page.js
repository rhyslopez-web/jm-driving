import HeroSection from "./components/HeroSection";
import HomeAbout from "./components/HomeAbout";
import LogoSlider from "./components/LogoSlider";
import HomeServicesRow from "./components/HomeServicesRow";
import HomeReviews from "./components/HomeReviews";
import HomeGallery from "./components/HomeGallery";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <LogoSlider/>
      <HomeAbout/>
      <LogoSlider/>
      <HomeServicesRow/>
      <HomeReviews/>
      <HomeGallery/>
      <FAQ/>
    </>
  );
}
