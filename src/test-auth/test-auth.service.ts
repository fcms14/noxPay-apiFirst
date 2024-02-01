import { Injectable } from '@nestjs/common';
import { TestAuth } from './entities/test-auth.entity';

@Injectable()
export class TestAuthService {
  findAll(apiKey: string): Promise<TestAuth> {
    return TestAuth.get(apiKey);
  }
}
