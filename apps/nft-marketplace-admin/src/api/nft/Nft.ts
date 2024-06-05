import { Transaction } from "../transaction/Transaction";

export type Nft = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner: string | null;
  price: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
