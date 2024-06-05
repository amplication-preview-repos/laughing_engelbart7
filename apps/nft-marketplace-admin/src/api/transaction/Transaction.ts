import { Nft } from "../nft/Nft";

export type Transaction = {
  amount: number | null;
  buyer: string | null;
  createdAt: Date;
  id: string;
  nft?: Nft | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
