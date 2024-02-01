import { Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  findAll(apiKey: string): Promise<Account> {
    return Account.get(apiKey);
  }
}
