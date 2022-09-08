interface IBook {
  id: string;
  author: string;
  genre: string;
  image: string;
  rentHistory: Array<any>;
  status: object;
  synopsis: string;
  systemEntryDate: string;
  tittle: string;
}

export type { IBook };
