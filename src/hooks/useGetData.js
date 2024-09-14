import Papa from "papaparse";
import { useEffect, useState } from "react";

const pricesSource =
  "https://docs.google.com/spreadsheets/d/1qSpDPmK8Zfl3UeAl9kpbD7k8dC7wzNIbudyaaFakNvs/export?format=csv&id=1qSpDPmK8Zfl3UeAl9kpbD7k8dC7wzNIbudyaaFakNvs&gid=0";

export default function useGetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(pricesSource);
        const csvText = await response.text();
  
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
          error: (error) => {
            console.error("Error al leer el CSV:", error);
          },
        });
      };
  
      fetchData();
    }, []);
  
    return {data};
}