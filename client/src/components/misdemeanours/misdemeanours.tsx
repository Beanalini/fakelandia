import { useState, useEffect } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";

const Misdemeanours: React.FC = () => {
  const url = `http://localhost:8080/api/misdemeanours/8`;
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMisdemeanours(data.misdemeanours);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMisdemeanours();
  }, [url]);
  return <>Misdemeanour!</>;
};

export default Misdemeanours;
