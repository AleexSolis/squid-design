import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Pagination from "../../components/atoms/pagination";
import { PaginationProps } from "../../components/atoms/pagination/types";

export default {
  title: "Atoms/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args: any) => <Pagination {...args} />;

export const Empty = Template.bind({});

export const Records = Template.bind({});
Records.args = {
  records: 240,
  recordsPerPage: 25,
};

export const onChangePage = Template.bind({});
onChangePage.args = {
  records: 240,
  recordsPerPage: 25,
  onChangePage: (currentPage: number) => console.log(`currentPage: ${currentPage}`),
};
