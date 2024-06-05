import { SortOrder } from "../../util/SortOrder";

export type NftOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
