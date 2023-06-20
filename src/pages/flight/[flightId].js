import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import OrderOverlay from "@/components/OrderOverlay";
import { useSession, signIn, signOut } from "next-auth/react";
const Post = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { flightId } = router.query;
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getFlight = async () => {
      const res = await axios.get(`/api/flight/${flightId}`);
      setPost(res.data);
    };
    if (flightId) {
      getFlight();
    }
  }, [flightId]);

  console.log(post);

  return (
    <div className="max-h-screen font-abc">
      <div className="max-md:hidden">
        <Navbar></Navbar>
      </div>

      <div className="relative p-5 m-8 text-black bg-white/90 rounded-xl ">
        {post != null ? (
          <div>
            <h1 className="m-3 text-6xl underline text-cyan-300 font-abc underline-offset-4">
              {post.name && post.name}
            </h1>
            <div className="ml-8">
              <p className="text-2xl font-bold text-cyan-300 font-abc">
                {post.from && post.from} to {post.to && post.to}
              </p>
              <div className="flex flex-row">
                <p className="text-2xl text-cyan-300 font-abc">Date Flight:</p>
                <p className="ml-2 text-2xl text-cyan-300 font-abc">
                  {post.date &&
                    post.date.slice(0, 10) + " " + post.date.slice(11, 16)}
                </p>
              </div>
              <p className="text-2xl text-cyan-300 font-abc">
                {post.desc && post.desc}
              </p>
            </div>
            <div className="absolute top-2 right-2">
              <button
                className="px-2 py-1 m-2 ml-8 text-xl rounded shadow-xl bg-orange/70 hover:scale-[103%] hover:bg-orange-400 hover:text-white"
                onClick={() => router.back()}
              >
                Back
              </button>
            </div>
            {session ? (
              <OrderOverlay post={post} />
            ) : (
              <div className="absolute bottom-2 right-2">
                <button
                  className="px-2 py-1 m-2 ml-8 text-xl rounded shadow-xl bg-orange/70 hover:scale-[103%] hover:bg-orange-400 hover:text-white"
                  onClick={() => router.push("/api/auth/signin")}
                >
                  Login to Order
                </button>
              </div>
            )}
          </div>
        ) : (
          <>loading...</>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Post;
