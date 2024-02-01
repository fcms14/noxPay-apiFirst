import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [AccountModule, PaymentModule, ReportModule],
})
export class AppModule {}
