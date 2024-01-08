import { useState, useEffect } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";
import MisdemeanoursTable from "./misdemeanours-table";
import FilterMisdemeanour from "./filter-misdemeanour";
// import useMisdemeanoursData from "../hooks/useMisdemeanoursData";
import { useMisdemeanours } from "../hooks/useMisdemeanoursContext";

const Misdemeanours: React.FC = () => {
  // const misdemeanours = useMisdemeanoursData();
  const { misdemeanours } = useMisdemeanours();
  console.log(misdemeanours);
  const [userValue, setUserValue] = useState<string>("Show all");
  const [displayMisdemeanours, setDisplayMisdemeanours] =
    useState<Misdemeanour[]>(misdemeanours);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDisplayMisdemeanours(misdemeanours);
    setIsLoading(false);
  }, [misdemeanours]);

  const userFilterMisdemeanour = (userMisdemeanour: string) => {
    //filter misdemeanours if not show all
    console.log(userMisdemeanour);
    setUserValue(userMisdemeanour);
    if (userMisdemeanour !== "Show all") {
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
      <section className="misdemeanours-wrapper">
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <>
            <FilterMisdemeanour
              userValue={userValue}
              onChangeUserValue={(event) => userFilterMisdemeanour(event)}
            />
            <MisdemeanoursTable misdemeanours={displayMisdemeanours} />
          </>
        )}
      </section>
    </>
  );
};

export default Misdemeanours;
