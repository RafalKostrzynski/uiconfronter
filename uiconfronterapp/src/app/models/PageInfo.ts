
export interface Image {
  url: string;
  type: string;
  size: number;
  height: number;
  width: number;
  size_pretty: string;
}

export interface Logo {
  url: string;
  type: string;
  size: number;
  height: number;
  width: number;
  size_pretty: string;
}

export interface Data {
  title: string;
  description: string;
  lang: string;
  author: string;
  publisher: string;
  image: Image;
  date: string;
  url: string;
  logo: Logo;
}

export interface PageInfo {
  status: string;
  data: Data;
}
