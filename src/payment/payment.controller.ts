import { Body, Controller, Get, Headers, Post, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiHeader, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('payment')
@ApiHeader({ name: 'Api-Key', required: true })
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @ApiQuery({ name: 'txid', description: 'Payment txid' })
  @Get(':txid')
  findOne(@Query('txid') txid: string, @Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.paymentService.findOne(apiKey, txid);
  }

  @ApiQuery({ name: 'txid', description: 'Payment txid' })
  @Get('/webhook/resend/:txid')
  webhookResend(@Query('txid') txid: string, @Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.paymentService.webhookResend(apiKey, txid);
  }

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto, @Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.paymentService.create(apiKey, createPaymentDto);
  }
}
