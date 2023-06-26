import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { first, map, mergeMap } from 'rxjs';
import * as shajs from 'sha.js';
import * as uuid from 'uuid';
import * as _ from 'lodash';

const CHALLENGE_METHOD = 'SHA256';
const GRANT_TYPE = 'authorization_code';
const CLIENT_ID = 'oauth143';
const REDIRECT_URI = 'na';                // TODO update redirect uri

@Component({
  selector: 'app-login24',
  templateUrl: './login24.component.html',
  styleUrls: ['./login24.component.scss'],
  imports:[HttpClientModule],
  standalone:true
})
export class Login24Component {

  apiUrl: string = 'http://localhost:3090';

  constructor(private httpClient: HttpClient) { }



  // next: (res:any) => { console.log(res) },
  // (err:any) => { console.log(err) },
  // ()

  login() {
    this.dologin23().pipe(first()).subscribe({
      next: (res) => { console.log(res) },
      error: (err) => { console.log(err) },
      complete: () => { console.log('completed23') }
    });
  }

  dologin23() {
    var codeSecret = this.generateSecret();
    var obj12 = {
      emailId: 'benz@gmail.com',
      password: 'benz',
      clientId: 'oauth23_testingV15',
      state: 'client_state',
      codeChallenge: codeSecret.challenge,
      codeChallengeMethod: codeSecret.challengeMethod
    }
    return this.httpClient.post(`${this.apiUrl}/oauth23/login`, obj12).pipe(
      mergeMap(resp => {
        return this.getAuthToken(resp, codeSecret);
      })
    );
  }

  generateSecret() {
    var secret12 = uuid.v4();
    var challenge = new shajs.sha256().update(secret12).digest('base64');
    return {
      challenge: challenge,
      secret: secret12,
      challengeMethod: CHALLENGE_METHOD
    };
  }

  getAuthToken(resp: any, codeSecret: any) {
    const user = _.clone(resp);
    const body = {
      userId: resp.userId,
      code: resp.code,
      codeVerifier: codeSecret.secret,
      redirectUri: REDIRECT_URI,
      clientId: CLIENT_ID,
      grantType: GRANT_TYPE
    };

    return this.httpClient.post<any>(`${this.apiUrl}/oauth23/token`, body).pipe(
      map(resp => {
        if (user && resp.accessToken) {
          user.token = resp.accessToken;
          user.tokenInfo = resp;
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

}
