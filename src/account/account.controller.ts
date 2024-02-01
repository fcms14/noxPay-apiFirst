import { Controller, Get, Headers } from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('account')
@ApiHeader({
  name: 'Api-Key',
  description: 'To get an APIKEY and a merchant resgistration, you must get in contact with NoxPay',
  required: true
})
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Get()
  findAll(@Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.accountService.findAll(apiKey);
  }
}
