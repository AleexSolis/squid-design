import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import DataTable from "../components/atoms/dataTable";
import { DataTableProps } from "../components/atoms/dataTable/types/";

export default {
  title: "DataTable",
  component: DataTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<DataTableProps> = (args: DataTableProps) => <DataTable {...args} />;

export const Data = Template.bind({});
Data.args = {
  columns: [
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "salary", label: "Salary" },
    { key: "office", label: "Office" },
  ],
  data: [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$3,120",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421",
    },
    {
      name: "Garrett Winters",
      position: "Director",
      salary: "$5,300",
      start_date: "2011/07/25",
      office: "Edinburgh",
      extn: "8422",
    },
  ],
};
