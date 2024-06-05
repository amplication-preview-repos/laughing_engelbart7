/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NftWhereUniqueInput } from "./NftWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { NftUpdateInput } from "./NftUpdateInput";

@ArgsType()
class UpdateNftArgs {
  @ApiProperty({
    required: true,
    type: () => NftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NftWhereUniqueInput)
  @Field(() => NftWhereUniqueInput, { nullable: false })
  where!: NftWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => NftUpdateInput,
  })
  @ValidateNested()
  @Type(() => NftUpdateInput)
  @Field(() => NftUpdateInput, { nullable: false })
  data!: NftUpdateInput;
}

export { UpdateNftArgs as UpdateNftArgs };