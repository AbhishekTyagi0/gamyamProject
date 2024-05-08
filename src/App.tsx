import "./App.css";
import Land from "./Components/Land";

import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <Land LandItem={products} />
      <Footer />
    </>
  );
};

export default App;
