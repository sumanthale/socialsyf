/* eslint-disable react/prop-types */
import InfluenceerPost from "./InfluencerPost";
import Post from "./Post";

const Posts = ({ isFeatured }) => {
  return (
    <>
      {isFeatured
        ? [1, 2, 3, 4, 5, 6].map((el) => <InfluenceerPost key={el} />)
        : [1, 2, 3, 4, 5, 6].map((el) => <Post key={el} />)}
    </>
  );
};

export default Posts;
