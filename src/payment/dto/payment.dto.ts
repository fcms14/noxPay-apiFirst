import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  merchant_id: number;

  @ApiProperty()
  method: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  Status: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  txid: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  created_at_date: Date;

  @ApiProperty()
  bank_account: any;

  @ApiProperty()
  QRCode: string;

  @ApiProperty()
  QRCodeText: string;

  @ApiProperty()
  URL: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  pixkey: string;
}
