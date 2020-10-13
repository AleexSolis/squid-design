import React from "react";
import PropTypes from "prop-types";
import { DataTableProps } from "./types";
import "./style.scss";

const DataTable = ({ columns, data }: DataTableProps): JSX.Element => {
  const haveData = data && data.length > 0;
  const haveColumns = columns && columns.length > 0;

  if (!haveData && !haveColumns) {
    return (
      <table>
        <tbody>
          <tr>
            <td className="no-data">Empty Table</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const columnsToRender = haveColumns
    ? [...columns]
    : Object.keys(data[0]).map((column) => {
        return { key: column, label: column, render: undefined };
      });

  return (
    <table>
      <thead>
        <tr>
          {columnsToRender.map((column, cIndex) => (
            <th key={`th-${cIndex}`}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {haveData ? (
          data.map((row, rIndex) => (
            <tr key={`tr-${rIndex}`}>
              {columnsToRender.map((column, cIndex) => (
                <td key={`tr-${rIndex}-td-${cIndex}`}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="no-data">
              No Data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

DataTable.defaultProps = {
  columns: [],
  data: [],
};

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable;
