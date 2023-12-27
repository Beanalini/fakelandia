import { Misdemeanour } from "../../../types/misdemeanours.types";
import TableRow from "./table-row";

interface misdemeanoursTableProps {
  misdemeanours: Misdemeanour[];
}
const MisdemeanoursTable: React.FC<misdemeanoursTableProps> = ({
  misdemeanours,
}) => {
  return (
    <>
      <table className="misdemeanours-table">
        <thead>
          <tr>
            <th className="table-heading">Citizen ID </th>
            <th className="table-heading">Date </th>
            <th className="table-heading">Misdemeanour</th>
          </tr>
        </thead>
        <tbody>
          {misdemeanours.map((misdemeanour) => (
            <TableRow misdemeanour={misdemeanour} />
          ))}
        </tbody>
      </table>
      <p>misdemeanours</p>
    </>
  );
};

export default MisdemeanoursTable;
