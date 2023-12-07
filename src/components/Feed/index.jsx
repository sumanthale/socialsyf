import CreatePost from "./CreatePost";
import LeftSideBar from "./RightSideBar";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div>
      <div className="">
        {/* <FeedBanner /> */}
        {/* <div className="grid grid-cols-9 gap-x-4 pt-48"> */}
        <div className="grid grid-cols-9 gap-x-4">
          <div className="col-span-5">
            <CreatePost />

            <Posts />
          </div>

          <div className="col-span-3">
            <LeftSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
