import { useState, useEffect } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";
import MisdemeanoursTable from "./misdemeanours-table";
import FilterMisdemeanour from "./filter-misdemeanour";

const Misdemeanours: React.FC = () => {
  const url = `http://localhost:8080/api/misdemeanours/8`;
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const [userValue, setUserValue] = useState<string>("Show All");
  const [displayMisdemeanours, setDisplayMisdemeanours] = useState<
    Misdemeanour[]
  >([]);

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
  }, []);

  const userFilterMisdemeanour = (userMisdemeanour: string) => {
    //filter misdemeanours if not show all
    console.log(userMisdemeanour);
    setUserValue(userMisdemeanour);
    if (userMisdemeanour !== "Show All") {
      //filter data by user selection
      const filteredMisdemeanours = misdemeanours.filter(
        (misdemeanour) => misdemeanour.misdemeanour === userMisdemeanour
      );
      console.log(filteredMisdemeanours);
      setDisplayMisdemeanours(filteredMisdemeanours);
    } else {
      setDisplayMisdemeanours(misdemeanours);
    }
  };
  return (
    <>
      <FilterMisdemeanour
        userValue={userValue}
        onChangeUserValue={(event) => userFilterMisdemeanour(event)}
      />
      <MisdemeanoursTable misdemeanours={displayMisdemeanours} />
    </>
  );
};

export default Misdemeanours;
