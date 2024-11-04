import { Component } from '@angular/core';
import { ServerApiService } from 'src/app/services/server-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private serverAPIService: ServerApiService) {}
  makeAPICall() {
    this.serverAPIService.triggerAPIcall().subscribe((response) => {
      console.log(response);
    });
  }
}
