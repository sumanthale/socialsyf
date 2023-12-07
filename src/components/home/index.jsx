import Slider from "./Banners";
import ProductGallery from "../ProductGallery";
// import SubSlider from "./SubSlider";
import FlashSale from "./FlashSale";
import Collection from "./Collection";
import Category from "./Category";
// import Footer from "./Footer";
// import NewsletterBox from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductGallery />
      <Category />
      <Collection />
      <FlashSale />
      {/* <SubSlider /> */}
      {/* <NewsletterBox /> */}
    </>
  );
};

export default Home;
