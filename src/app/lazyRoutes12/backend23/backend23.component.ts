import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-backend23',
  templateUrl: './backend23.component.html',
  styleUrls: ['./backend23.component.scss'],
  standalone:true,
  imports: [ HttpClientModule ]
})
export class Backend23Component {
  url23:string = 'https://jsonplaceholder.typicode.com/users/';
  url24:string = 'http://localhost:3044/sessions12';
  url25:string = 'http://localhost:3044/stream';
  
  constructor(private httpClient:HttpClient) { }

  loginToSimpleExpressSessions() {
    const body = { username: 'user23', password: 'password23'}
    this.httpClient.post(`${this.url24}/login`, body).subscribe(res => { console.log(res) });
    // this.httpClient.get(this.url25).subscribe(res => { console.log(res) });
  }

  getData() {
    this.httpClient.get(this.url23).subscribe(res => { console.log(res) });
  }
}
