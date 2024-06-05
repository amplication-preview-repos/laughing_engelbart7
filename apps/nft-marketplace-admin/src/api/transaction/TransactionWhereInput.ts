import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NftWhereUniqueInput } from "../nft/NftWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  buyer?: StringNullableFilter;
  id?: StringFilter;
  nft?: NftWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
};
