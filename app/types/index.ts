export type Link = {
  name: string;
  icon?: string;
  to: string;
};

export type LinkGroup = {
  name: string;
  links: Link[];
};
