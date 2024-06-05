import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NftModuleBase } from "./base/nft.module.base";
import { NftService } from "./nft.service";
import { NftController } from "./nft.controller";
import { NftResolver } from "./nft.resolver";

@Module({
  imports: [NftModuleBase, forwardRef(() => AuthModule)],
  controllers: [NftController],
  providers: [NftService, NftResolver],
  exports: [NftService],
})
export class NftModule {}
