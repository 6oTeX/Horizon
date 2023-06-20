import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { todoId } = router.query;
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getTodo = async () => {
      const res = await axios.get(`/api/todos/${todoId}`);
      setPost(res.data);
    };
    if (todoId) {
      getTodo();
    }
  }, [todoId]);
  const handlePutTodo = async () => {
    const res = await axios.put(`/api/todos/${todoId}`, {
      title: post.title,
      completed: !post.completed,
    });
    setPost(res.data);
  };

  console.log(post);

  return (
    <div>
      {post != null ? (
        <div>
          <h1 className="m-3 text-6xl text-cyan-300">
            {post.title && post.title}
          </h1>
          <div className="ml-2">
            {post.completed ? (
              <p className="text-green-500 ">Completed</p>
            ) : (
              <p className="text-red-500">Not Completed</p>
            )}
          </div>
          <button
            className="p-1 m-2 bg-blue-300 rounded "
            onClick={handlePutTodo}>
            Toggle Completed
          </button>
          <button
            className="p-1 m-2 bg-red-600 rounded"
            onClick={() => router.back()}>
            Back
          </button>
        </div>
      ) : (
        <>loading...</>
      )}
    </div>
  );
};

export default Post;
