import CreatePost from "./CreatePost";
import LeftSideBar from "./RightSideBar";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div>
      <div className="pl-5">
        <div className="grid grid-cols-9">
          <div className="col-span-5">
            <CreatePost />

            <Posts isFeatured={false} />
          </div>

          <div className="ml-4 col-span-4">
            <LeftSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
