import { HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

export class HttpService {
    static async get<T>(apiKey: string, path: string): Promise<T> {
        try {
            const url = `${process.env.URL}/${path}`
            const headers = { headers: { 'Api-Key': apiKey } }
            const response: AxiosResponse<T> = await axios.get(url, headers);

            return response.data;
        } catch (error) {
            throw new HttpException(error?.message ?? "bad request", error?.response?.status ?? HttpStatus.BAD_REQUEST);
        }
    }
}