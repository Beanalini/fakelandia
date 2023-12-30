import { useState } from "react";
import { Misdemeanour } from "../../../types/misdemeanours.types";
import MisdemeanoursTable from "./misdemeanours-table";
import FilterMisdemeanour from "./filter-misdemeanour";
import useMisdemeanoursData from "../hooks/useMisdemeanoursData";

const Misdemeanours: React.FC = () => {
  const misdemeanours = useMisdemeanoursData();
  console.log(misdemeanours);
  const [userValue, setUserValue] = useState<string>("Show All");
  const [displayMisdemeanours, setDisplayMisdemeanours] =
    useState<Misdemeanour[]>(misdemeanours);

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
