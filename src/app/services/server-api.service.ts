import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import env from 'src/env/env';

const BASE_URL = env.EXTERNAL_API_URL;

@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  exampleEndpoint: string = '/example-api-authentication';

  constructor(private httpClient: HttpClient) {}

  triggerAPIcall() {
    return this.httpClient.get(BASE_URL + this.exampleEndpoint);
  }
}
