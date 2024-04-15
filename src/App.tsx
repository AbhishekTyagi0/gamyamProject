import "./App.css";
import Land from "./Components/Land";

import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";

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
        setProducts(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Land LandItem={products} />
      <Footer />
    </>
  );
};

export default App;
