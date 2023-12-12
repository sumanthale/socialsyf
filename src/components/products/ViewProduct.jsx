import ProductImages from "./ProductImages";
import ProductReviews from "./ProductReviews";
import ProductDetails from "./ProductDetails";

const ViewProduct = () => {
  //   const [colorList, setColorList] = useState([]);
  //   const handleColorSelection = (val) => {
  //     if (colorList.indexOf(val) > -1) {
  //       setColorList([...colorList.filter((value) => value !== val)]);
  //     } else {
  //       setColorList([...colorList, val]);
  //     }
  //   };

  //   const isColorSelected = (val) => colorList.includes(val);
  return (
    <section className="font-poppins dark:bg-gray-800">
      <div className="max-w-full px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 md:mb-0">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <ProductImages />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <ProductDetails />
            </div>
          </div>
        </div>
      </div>

      <ProductReviews />
    </section>
  );
};

export default ViewProduct;
