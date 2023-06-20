import Navbar from "@/components/Nav";
import FrontPage from "@/components/home";
import Popular from "@/components/Popular";
import Ads from "@/components/Ads";
import Recommended from "@/components/Recommended";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

// Get data from API with axios

// const [flightList, setFlightList] = useState([]);
// useEffect(() => {
//   const getFlight = async () => {
//     const res = await axios.post(`api/get-all`);
//     setFlightList(res.data);
//     console.log(formattedDate);
//   };

//   if (name !== "" && date !== "") {
//     getFlight();
//   } else {
//     setFlightList([]);
//   }
// }, []);
export default function Home() {
  return (
    <div className="max-h-screen font-abc">
      <section className="h-screen">
        <div className="max-md:hidden">
          <Navbar></Navbar>
        </div>
        <span>
          <FrontPage></FrontPage>
        </span>
      </section>
      <section className="h-screen bg-white">
        <Popular></Popular>
      </section>
      <section className="h-screen bg-white">
        <Ads></Ads>
      </section>
      <section className="h-screen bg-white">
        <Recommended></Recommended>
      </section>
      <section className="bg-white h-fit">
        <Service></Service>
      </section>
      <Footer></Footer>
    </div>
  );
}
