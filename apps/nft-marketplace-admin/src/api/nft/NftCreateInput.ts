import { TransactionCreateNestedManyWithoutNftsInput } from "./TransactionCreateNestedManyWithoutNftsInput";

export type NftCreateInput = {
  description?: string | null;
  name?: string | null;
  owner?: string | null;
  price?: number | null;
  transactions?: TransactionCreateNestedManyWithoutNftsInput;
};
