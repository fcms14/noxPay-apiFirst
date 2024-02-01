import { HttpService } from 'src/services/http.service';

export class TestAuth {
  constructor(
    public name: string,
    public perm: number,
  ) {}

  static async get(apiKey: string): Promise<TestAuth> {
    const response = await HttpService.get<TestAuth>(apiKey, 'test-auth');

    return new TestAuth(response.name, response.perm);
  }
}
