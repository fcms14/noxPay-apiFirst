import { HttpService } from "src/services/http.service";
import { CreatePaymentDto } from "../dto/create-payment.dto";

export class Payment {
    constructor(
        public method: string,
        public code: string,
        public txid: string,
        public amount: number,
        public status?: string,
        public Status?: string,
        public id?: number,
        public created_at_date?: Date,
        public merchant_id?: number,
        public bank_account?: any,
        public QRCode?:  string,
        public QRCodeText?:  string,
        public URL?:  string,
    ) { }

    static async get(apiKey: string, txid: string): Promise<Payment> {
        const response = await HttpService.get<Payment>(apiKey, `payment/${txid}`);

        return new Payment(
            response.method,
            response.code,
            response.txid,
            response.amount,
            response.status,
            null,
            response.id,
            response.created_at_date,
            response.merchant_id,
        );
    }

    static async resend(apiKey: string, txid: string): Promise<Payment> {
        const response = await HttpService.get<Payment>(apiKey, `payment/webhook/resend/${txid}`);

        return new Payment(
            response.method,
            response.code,
            response.txid,
            response.amount,
            response.status,
            null,
            response.id,
            response.created_at_date,
            response.merchant_id,
        );
    }

    static async create(apiKey: string, createPaymentDto: CreatePaymentDto): Promise<Payment> {
        const response = await HttpService.post<Payment>(apiKey, `payment`, createPaymentDto);

        return new Payment(
            response.method,
            response.code,
            response.txid,
            response.amount,
            null,
            response.Status,
            null,
            null,
            null,
            response.bank_account,
            response.QRCode,
            response.QRCodeText,
            response.URL,
        );
    }
}
