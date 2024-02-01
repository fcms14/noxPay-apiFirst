import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'Payment type',
    enum: ['PIX', 'PIXOUT'],
    required: true,
  })
  method: string;

  @ApiProperty({ description: 'Payment code', required: true })
  code: string;

  @ApiProperty({
    description: 'Payment amount',
    minimum: 0.01,
    default: 1.23,
    required: true,
  })
  amount: number;

  @ApiProperty({
    description:
      'Required on method PIXOUT: Choose between PIX_KEY or BANK_ACCOUNT',
    enum: ['PIX_KEY', 'BANK_ACCOUNT'],
  })
  type?: string;

  @ApiProperty({ description: 'Required on type PIX_KEY' })
  pixkey?: string;
}
