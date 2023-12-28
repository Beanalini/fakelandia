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
      <div className="misdemeanours-table">
        <table>
          <thead>
            <tr>
              <th className="table-heading">Citizen ID </th>
              <th className="table-heading">Date </th>
              <th className="table-heading">Misdemeanour</th>
              <th className="table-heading">Punishment</th>
            </tr>
          </thead>
          <tbody>
            {misdemeanours.map((misdemeanour) => (
              <TableRow misdemeanour={misdemeanour} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MisdemeanoursTable;
