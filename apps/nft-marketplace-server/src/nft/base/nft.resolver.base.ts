/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Nft } from "./Nft";
import { NftCountArgs } from "./NftCountArgs";
import { NftFindManyArgs } from "./NftFindManyArgs";
import { NftFindUniqueArgs } from "./NftFindUniqueArgs";
import { CreateNftArgs } from "./CreateNftArgs";
import { UpdateNftArgs } from "./UpdateNftArgs";
import { DeleteNftArgs } from "./DeleteNftArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { NftService } from "../nft.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Nft)
export class NftResolverBase {
  constructor(
    protected readonly service: NftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async _nftsMeta(
    @graphql.Args() args: NftCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Nft])
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async nfts(@graphql.Args() args: NftFindManyArgs): Promise<Nft[]> {
    return this.service.nfts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Nft, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "own",
  })
  async nft(@graphql.Args() args: NftFindUniqueArgs): Promise<Nft | null> {
    const result = await this.service.nft(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "create",
    possession: "any",
  })
  async createNft(@graphql.Args() args: CreateNftArgs): Promise<Nft> {
    return await this.service.createNft({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "update",
    possession: "any",
  })
  async updateNft(@graphql.Args() args: UpdateNftArgs): Promise<Nft | null> {
    try {
      return await this.service.updateNft({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "delete",
    possession: "any",
  })
  async deleteNft(@graphql.Args() args: DeleteNftArgs): Promise<Nft | null> {
    try {
      return await this.service.deleteNft(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: Nft,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}