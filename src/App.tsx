import "./App.css";
import Land from "./Components/Land";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";

import { useEffect, useState } from "react";
import "./App.css";
import Carousels from "./Utils/Carousel";

const App: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://prod-be.1acre.in/lands/?ordering=-updated_at&page=1&page_size=10",
          {
            mode: "cors",
          }
        );
        if (!response.ok) {
          throw new Error(`This is an HTTP Error: The error is ${response}`);
        }
        const data = await response.json();
        console.log("data", data);
        setProducts(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const slides = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <>
      <Land LandItem={products} />
      {/* <Carousels slides={slides} /> */}
    </>
  );
};

export default App;
