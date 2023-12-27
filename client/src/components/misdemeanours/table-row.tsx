import { Misdemeanour } from "../../../types/misdemeanours.types";

interface misdemeanourTableProps {
  misdemeanour: Misdemeanour;
}
const TableRow: React.FC<misdemeanourTableProps> = ({ misdemeanour }) => {
  return (
    <>
      <tr key={misdemeanour.citizenId}>
        <td className="table-data">{misdemeanour.citizenId}</td>
        <td className="table-data">{misdemeanour.date}</td>
        <td className="table-data">{misdemeanour.misdemeanour}</td>
      </tr>
    </>
  );
};

export default TableRow;
