import { HttpService } from "src/services/http.service";

export class Account {
    constructor(
        public name: number,
        public balance: number
    ) { }

    static async getAll(apiKey: string): Promise<Account> {
        const response = await HttpService.get<Account>(apiKey, 'account');

        return new Account(response.name, response.balance);
    }
}
