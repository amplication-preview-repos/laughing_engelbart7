import { NftWhereUniqueInput } from "../nft/NftWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  buyer?: string | null;
  nft?: NftWhereUniqueInput | null;
  transactionDate?: Date | null;
};
