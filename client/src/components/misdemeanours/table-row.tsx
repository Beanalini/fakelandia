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
        <td className="table-data table__data table__data--details">
          {misdemeanour.details}
        </td>
        <td className="table-data">
          <img
            className="punishment-image"
            src={`https://picsum.photos/100/100?random=${Math.floor(
              Math.random() * 1000
            )}`}
          />{" "}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
