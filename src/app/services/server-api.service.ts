import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  exampleEndpoint: string = '/example-api-authentication';

  constructor(private httpClient: HttpClient) {}

  triggerAPIcall() {
    return this.httpClient.get(this.exampleEndpoint);
  }
}
