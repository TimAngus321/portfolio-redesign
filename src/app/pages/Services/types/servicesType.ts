export interface Section {
  subTitle: string;
  desc: string;
}

export interface services {
  title: string;
  subTitle: string;
  desc: string;
  sections?: Section[];
}
