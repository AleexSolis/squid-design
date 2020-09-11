import React from "react";
import PropTypes from "prop-types";
import { DataTableProps } from "./types";

const DataTable = ({ columns, data }: DataTableProps): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, cIndex) => (
            <th key={`th-${cIndex}`}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIndex) => (
          <tr key={`tr-${rIndex}`}>
            {columns.map((column, cIndex) => (
              <td key={`tr-${rIndex}-td-${cIndex}`}>
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable;
