import Slider from "./Banners";
import ProductGallery from "../ProductGallery";
// import SubSlider from "./SubSlider";
import FlashSale from "./FlashSale";
import Collection from "./Collection";
import Category from "./Category";
// import Footer from "./Footer";
import NewsletterBox from "./NewsLetter";
import Recommended from "./Recomendations";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Slider />
      {user !== null && <Recommended />}

      <ProductGallery />
      <Category />
      <Collection />
      <FlashSale />
      {/* <SubSlider /> */}
      <NewsletterBox />
    </>
  );
};

export default Home;
