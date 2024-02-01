import { Controller, Get, Headers } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { ApiHeader, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('account')
@ApiHeader({ name: 'Api-Key', required: true })
@ApiUnauthorizedResponse({ description: 'Error: Unauthorized'})
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @ApiOkResponse({ description: 'Success response', type: AccountDto })
  @Get()
  findAll(@Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.accountService.findAll(apiKey);
  }
}
