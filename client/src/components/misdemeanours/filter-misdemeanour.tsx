interface FilterMisdemeanourProps {
  userValue: string;
  onChangeUserValue: (value: string) => void;
}

const FilterMisdemeanour: React.FC<FilterMisdemeanourProps> = ({
  userValue,
  onChangeUserValue,
}) => {
  return (
    <>
      <div className="misdemeanour-filter">
        <label htmlFor="filter-misdemeanour">Select Misdemeanour</label>
        <select
          id="filter-misdemeanour"
          name="filter-misdemeanour"
          value={userValue}
          onChange={(e) => onChangeUserValue(e.target.value)}
        >
          <option value="Show All">Show All</option>
          <option value="rudeness">Rudeness</option>
          <option value="vegetables">Vegetables</option>
          <option value="lift">Lift</option>
          <option value="united">United</option>
        </select>
      </div>
    </>
  );
};
export default FilterMisdemeanour;
