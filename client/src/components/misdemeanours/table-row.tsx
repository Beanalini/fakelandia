import { Misdemeanour } from "../../../types/misdemeanours.types";
import MisdemeanourEmoji from "./misdemeanour-emoji";

interface misdemeanourTableProps {
  misdemeanour: Misdemeanour;
}
const TableRow: React.FC<misdemeanourTableProps> = ({ misdemeanour }) => {
  return (
    <>
      <tr key={misdemeanour.citizenId}>
        <td className="table-data">{misdemeanour.citizenId}</td>
        <td className="table-data">{misdemeanour.date}</td>
        <td className="table-data">
          {misdemeanour.misdemeanour}{" "}
          <MisdemeanourEmoji misdemeanour={misdemeanour.misdemeanour} />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
