import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentDto } from './dto/payment.dto';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Payment } from './entities/payment.entity';

@ApiTags('payment')
@ApiHeader({ name: 'Api-Key', required: true })
@ApiUnauthorizedResponse({ description: 'Error: Unauthorized' })
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOkResponse({ description: 'Success response', type: PaymentDto })
  @ApiParam({ name: 'txid', description: 'Payment txid' })
  @Get(':txid')
  findOne(
    @Param('txid') txid: string,
    @Headers() headers: Record<string, string>,
  ): Promise<Payment> {
    const apiKey = headers['api-key'];

    return this.paymentService.findOne(apiKey, txid);
  }

  @ApiOkResponse({ description: 'Success response', type: PaymentDto })
  @ApiParam({ name: 'txid', description: 'Payment txid' })
  @Get('/webhook/resend/:txid')
  webhookResend(
    @Param('txid') txid: string,
    @Headers() headers: Record<string, string>,
  ): Promise<Payment> {
    const apiKey = headers['api-key'];

    return this.paymentService.webhookResend(apiKey, txid);
  }

  @ApiCreatedResponse({ description: 'Success response', type: PaymentDto })
  @Post()
  create(
    @Body() createPaymentDto: CreatePaymentDto,
    @Headers() headers: Record<string, string>,
  ): Promise<Payment> {
    const apiKey = headers['api-key'];

    return this.paymentService.create(apiKey, createPaymentDto);
  }
}
