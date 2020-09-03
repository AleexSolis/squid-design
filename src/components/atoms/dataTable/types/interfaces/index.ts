interface columns {
  key: string;
  label: string;
  render: (value: any, record: any) => JSX.Element | string;
}

export type { columns };
