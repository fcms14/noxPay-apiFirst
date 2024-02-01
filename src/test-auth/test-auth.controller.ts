import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { TestAuthService } from './test-auth.service';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('test-auth')
@ApiHeader({
  name: 'Api-Key',
  description: 'To get an APIKEY and a merchant resgistration, you must get in contact with NoxPay',
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
