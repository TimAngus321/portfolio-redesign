import { CSSProperties } from "react";

export interface skills {
  name: string;
  image: string;
  alt: string;
  styleClass?: string | undefined;
  waterfall: string[];
}

export interface waterfallObj {
    imgUrl: string[];
    colors: string[];
}


