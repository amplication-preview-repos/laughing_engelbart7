import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  buyer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  nftId?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
