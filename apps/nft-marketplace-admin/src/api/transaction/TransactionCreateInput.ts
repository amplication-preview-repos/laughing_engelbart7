import { NftWhereUniqueInput } from "../nft/NftWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  buyer?: string | null;
  nft?: NftWhereUniqueInput | null;
  transactionDate?: Date | null;
};
