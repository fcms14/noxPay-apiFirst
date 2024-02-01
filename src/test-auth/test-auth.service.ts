import { Injectable } from '@nestjs/common';
import { TestAuth } from './entities/test-auth.entity';

@Injectable()
export class TestAuthService {
  findAll(apiKey: string) {
    return TestAuth.get(apiKey);
  }
}
