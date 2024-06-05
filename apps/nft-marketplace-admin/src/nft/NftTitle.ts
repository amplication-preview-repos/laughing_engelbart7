import { Nft as TNft } from "../api/nft/Nft";

export const NFT_TITLE_FIELD = "name";

export const NftTitle = (record: TNft): string => {
  return record.name?.toString() || String(record.id);
};
