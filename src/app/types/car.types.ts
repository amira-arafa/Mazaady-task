export type Categories = {
  children?: Categories[] | null;
  id: number;
  name: string;
};

export type propertiesOption = {
  children?: any;
  id: number;
  name: string;
  parent: number;
  options: propertiesOption[];
};

export type Properties = {
  id: number;
  name: string;
  options: propertiesOption[];
};
