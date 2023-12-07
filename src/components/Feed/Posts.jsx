import Post from "./Post";

const Posts = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <Post key={el} />
      ))}
    </>
  );
};

export default Posts;
