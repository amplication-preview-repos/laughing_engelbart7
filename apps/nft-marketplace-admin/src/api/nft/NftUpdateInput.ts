import { TransactionUpdateManyWithoutNftsInput } from "./TransactionUpdateManyWithoutNftsInput";

export type NftUpdateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  price?: number | null;
  transactions?: TransactionUpdateManyWithoutNftsInput;
};
