import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  balance: number;
}
