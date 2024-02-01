import { Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  findAll(apiKey: string) {
    return Account.get(apiKey);
  }
}
