export type CustomButtonProps = {
  type:
    | "text"
    | "contained"
    | "outlined"
    | "primaryContained"
    | "primaryOutlined";
  onClick: () => void;
  height?: string;
  width?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | JSX.Element;
};

export type DropdownButtonProps = Omit<CustomButtonProps, "onClick"> & {
  dropdownContent: JSX.Element;
};