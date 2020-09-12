import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DataTable from "../../components/atoms/dataTable";
import { DataTableProps } from "../../components/atoms/dataTable/types";
import columns from "../../mockups/dataTables/columns.json";
import data from "../../mockups/dataTables/data.json";

export default {
  title: "Atoms/DataTable",
  component: DataTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<DataTableProps> = (args: DataTableProps) => <DataTable {...args} />;

export const Empty = Template.bind({});

export const DataAndColumns = Template.bind({});
DataAndColumns.args = {
  columns,
  data,
};

export const onlyColumns = Template.bind({});
onlyColumns.args = {
  columns,
};

export const onlyData = Template.bind({});
onlyData.args = {
  data,
};
