import { useState, useEffect } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";

const useMisdemeanoursData = () => {
  const url = `http://localhost:8080/api/misdemeanours/8`;
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  useEffect(() => {
    const fetchMisdemeanoursData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMisdemeanours(data.misdemeanours);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMisdemeanoursData();
  }, [url]);

  return misdemeanours;
};

export default useMisdemeanoursData;
