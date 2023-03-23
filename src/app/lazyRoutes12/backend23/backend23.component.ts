import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-backend23',
  templateUrl: './backend23.component.html',
  styleUrls: ['./backend23.component.scss'],
  standalone:true,
  imports: [ HttpClientModule ]
})
export class Backend23Component {
  url23:string = 'https://jsonplaceholder.typicode.com/users';
  url24:string = 'http://localhost:3044';  
  
  constructor(private httpClient:HttpClient) { }

  getDummyData() { this.httpClient.get(this.url23).subscribe(res => { console.log(res) }); }

  loginToSimpleExpressSessions() {
    const body = { username: 'user23', password: 'password23'}
    this.httpClient.post(`${this.url24}/sessions12/login`, body, {withCredentials:true}).
      subscribe(res => { console.log(res) });
    // this.httpClient.get(`${this.url24}/stream`, {responseType: 'text'}).subscribe(res => { console.log(res) });
  }
  /***************************************************************************/
  cookieStuff1() {
    const headers23 = new HttpHeaders();
    this.httpClient.get(`${this.url24}/cookieStuff/setCookie1`, 
      { headers: headers23, withCredentials:true, responseType: 'text'}).subscribe(res => { console.log(res) })
  }

  cookieStuff2() {
    var headers23 = new HttpHeaders();    
    this.httpClient.get(`${this.url24}/cookieStuff/setCookie2`, {headers: headers23, withCredentials:true}).subscribe(res => { console.log(res) });
  }

  seeCookies() {
    this.httpClient.get(`${this.url24}/cookieStuff/seeCookies`, {withCredentials:true}).subscribe(res => { console.log(res) });
  }
  /***************************************************************************/

  setCookieLocally1() {
    const d: Date = new Date();
    const expireTime = 60 * 60 * 1000;
    d.setTime(d.getTime() + expireTime);
    const expires = `expires=${d.toUTCString()}`;
    const cpath = '';
    const name12 = 'cookie_local1';
    const value12 = 'chantiGaduLocal';
    const blah23 = `${name12}=${value12}; ${expires}${cpath}; SameSite=Lax`;
    // console.log(blah23); cookie12=RRR is a telugu film; expires=Thu, 23 Mar 2023 06:00:40 GMT; SameSite=Lax
    document.cookie = blah23;
  }

  setCookieLocally2() {
    var name12 = `cookie_local2=AmarendraBaahubali`;
    var expires12 = `expires=Thu, 23 Apr 2023 06:46:28 GMT`;  // 
    var path12 = `path=/`;              // NOT WORKING ====> `path=/jingChak`; 
    var others = `SameSite=Lax;`;    
    document.cookie = `${name12}; ${expires12}; ${path12}; ${others}`;
  }

  getLocalCookie() { console.log(document.cookie); }

  clearAllCookies() {
    this.httpClient.get(`${this.url24}/cookieStuff/clearCookies`, {withCredentials:true}).subscribe();
  }

}
