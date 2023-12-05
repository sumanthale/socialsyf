import Slider from "./Banners";
import ProductGallery from "../ProductGallery";
import SubSlider from "./SubSlider";
import FlashSale from "./FlashSale";
import Collection from "./Collection";
import Category from "./Category";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Slider />

      <ProductGallery />
      <Category />
      <Collection />
      <FlashSale />
      <SubSlider />
      <Footer />
    </div>
  );
};

export default Home;
