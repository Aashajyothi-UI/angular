import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';

const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '787836786301-8d39v2tp79m2db8boadh7m7vafnrco9o.apps.googleusercontent.com',
  scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
  showDebugInformation: true,
};
export interface UserInfo {
  info: {
    sub: string
    email: string,
    name: string,
    picture: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  gmail = 'https://gmail.googleapis.com'
  userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService, private readonly httpClient: HttpClient) {
    // oAuthService.configure(authCodeFlowConfig);

    // oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";


    // oAuthService.loadDiscoveryDocument().then(() => {

    //   oAuthService.tryLoginImplicitFlow().then(() => {

    //     // when not logged in, redirecvt to google for login
    //     // else load user profile
    //     if (!oAuthService.hasValidAccessToken()) {
    //       oAuthService.initLoginFlow()
    //     } else {
    //       oAuthService.loadUserProfile().then((userProfile) => {
    //         this.userProfileSubject.next(userProfile as UserInfo)
    //       })
    //     }

    //   })
    // });
  }
  googleLogin() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {

        // when not logged in, redirecvt to google for login
        // else load user profile
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow()
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        }

      })
    });
  }

  emails(userId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages`, { headers: this.authHeader() })
  }

  getMail(userId: string, mailId: string): Observable<any> {
    return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`, { headers: this.authHeader() })
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

  signOut() {
    this.oAuthService.logOut()
  }

  private authHeader(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
    })
  }

}
