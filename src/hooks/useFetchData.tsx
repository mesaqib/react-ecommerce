import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const useFetchData = (api: string) => {
  const [data, setData] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(api);

        if (!res.ok) throw new Error("Server Error");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log("Error");
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetchData;
