import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';
import { PaymentModule } from './payment/payment.module';
import { ReportModule } from './report/report.module';
import { TestAuthModule } from './test-auth/test-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AccountModule,
    PaymentModule,
    ReportModule,
    TestAuthModule,
  ],
})
export class AppModule {}
