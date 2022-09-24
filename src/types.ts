export type ColumnOption = {
  name: string;
  heading?: string;
  padding?: number;
  maxWidth?: number;
  minWidth?: number;
  align?: "left" | "center" | "right";
  alignHeading?: "left" | "center" | "right";
};

export type ColumnOptions = (
  | ColumnOption
  // {name: "col", heading: "Column"} can be shortened to {col: "Column"},
  | { [index: string]: string }
  // { name: "column" } can be abbreviated as "column".
  | string
)[];

export type TableOptions = {
  // How to align the column headings
  alignTableHeadings?: "left" | "center" | "right";
  // Want to color the frame? Give any string with ansi color escapes, e.g. chalk.bgBlue.yellow("Take This!")
  frameChalk?: string;
  // Want to color the header differently?
  headerChalk?: string;
  // Want to color every second row differently?
  alternativeChalk?: string;
  // When an Object is converted to an array of properties, how to sort those?
  propertyCompareFunction?: (a: any, b: any) => number;
  // the values for an explicit index column
  index?: any[];
};
