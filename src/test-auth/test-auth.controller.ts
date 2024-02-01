import { Controller, Get, Headers } from '@nestjs/common';
import { TestAuthService } from './test-auth.service';
import { ApiHeader, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { TestAuthDto } from './dto/test-auth.dto';
import { TestAuth } from './entities/test-auth.entity';

@ApiTags('test-auth')
@ApiHeader({ name: 'Api-Key', required: true })
@ApiUnauthorizedResponse({ description: 'Error: Unauthorized'})
@Controller('test-auth')
export class TestAuthController {
  constructor(private readonly testAuthService: TestAuthService) { }

  @ApiOkResponse({ description: 'Success response', type: TestAuthDto })
  @Get()
  findAll(@Headers() headers: Record<string, string>): Promise<TestAuth> {
    const apiKey = headers['api-key']

    return this.testAuthService.findAll(apiKey);
  }
}
