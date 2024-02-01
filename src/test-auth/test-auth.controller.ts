import { Controller, Get, Headers } from '@nestjs/common';
import { TestAuthService } from './test-auth.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('test-auth')
@ApiHeader({
  name: 'Api-Key',
  description: 'To get an APIKEY and a merchant resgistration, you must get in contact with NoxPay',
  required: true
})
@Controller('test-auth')
export class TestAuthController {
  constructor(private readonly testAuthService: TestAuthService) { }

  @Get()
  findAll(@Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.testAuthService.findAll(apiKey);
  }
}
