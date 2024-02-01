import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  findOne(apiKey: string, txid: string) {
    return Payment.get(apiKey, txid);
  }

  webhookResend(apiKey: string, txid: string) {
    return Payment.resend(apiKey, txid);
  }

  create(apiKey: string, createPaymentDto: CreatePaymentDto) {
    return Payment.create(apiKey, createPaymentDto);
  }
}
