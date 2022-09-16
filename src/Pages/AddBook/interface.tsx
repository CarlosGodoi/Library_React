export type TStatus = {
  description: string;
  isActive: boolean;
};

interface IBook {
  id: string;
  author: string;
  genre: string;
  image: string;
  rentHistory: Array<any>;
  status: TStatus;
  synopsis: string;
  systemEntryDate: string;
  tittle: string;
}

export type { IBook };
