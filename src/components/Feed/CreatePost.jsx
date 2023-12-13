/* eslint-disable react/prop-types */

const CreatePost = () => {
  return (
    <div className="md:p-6 shadow-lg bg-gray-50 rounded-lg ">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            alt=""
            className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
            src="https://source.unsplash.com/40x40/?portrait?1"
          />
        </div>
        <div
          className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-200 rounded-full cursor-pointer"
          //   onClick={() => setIsOpen(true)}
        >
          <h3 className="md:text-lg text-gray-500">
            Whats on your mind, Sumanth ?
          </h3>
        </div>
      </div>
      <hr className="mt-3 mb-3" />
      <div className="grid grid-cols-4 gap-1">
        <FeatureButton
          text="Live video"
          imageBgPosition="0px 0px"
          image="	https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
        />
        <FeatureButton
          text="Photo/Video"
          imageBgPosition="0px -225px"
          image={"https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"}
        />
        <FeatureButton
          text="Feeling/Activity"
          imageBgPosition="0px -25px"
          image={"	https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"}
        />
        <FeatureButton
          text="Intrest"
          imageBgPosition="0px -25px"
          image={"https://img.icons8.com/?size=256&id=5GRnl7omKlp3&format=png"}
        />
      </div>
    </div>
  );
};

export default CreatePost;

function FeatureButton({ text, image }) {
  return (
    <button className="px-4 py-2 flex items-center  justify-center space-x-2 hover:bg-gray-200 rounded-lg">
      <img height="24" width="24" alt="" src={image} />
      <span className="text-gray-600 font-medium hidden md:block">{text}</span>
    </button>
  );
}
