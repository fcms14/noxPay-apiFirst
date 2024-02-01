import { HttpService } from "src/services/http.service";

export class TestAuth {
    constructor(
        public name: number,
        public perm: string
    ) { }

    static async getAll(apiKey: string): Promise<TestAuth> {
        const response = await HttpService.get<TestAuth>(apiKey, 'test-auth');

        return new TestAuth(response.name, response.perm);
    }
}
