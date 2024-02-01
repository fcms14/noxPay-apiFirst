import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  findOne(apiKey: string, txid: string): Promise<Payment> {
    return Payment.get(apiKey, txid);
  }

  webhookResend(apiKey: string, txid: string): Promise<Payment> {
    return Payment.resend(apiKey, txid);
  }

  create(apiKey: string, createPaymentDto: CreatePaymentDto): Promise<Payment> {
    return Payment.create(apiKey, createPaymentDto);
  }
}
