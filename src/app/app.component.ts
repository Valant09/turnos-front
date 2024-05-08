import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthModule, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turnos-front';

  constructor(private oauthService: OAuthService){
    this.configure();
  }

  authconfig: AuthConfig = {
    issuer: 'https:localhost:8080/auth/realms/',
    redirectUri: window.location.origin,
    clientId: '0oaxxxxxx',
    responseType: 'code',
    scope: 'openid profile email',
    showDebugInformation: true
  };
  configure():void {
    this.oauthService.configure(this.authconfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => 
      this.oauthService.tryLogin());
  }
  login(): void {
    this.oauthService.initImplicitFlowInternal();
  }
  logout(): void {
    this.oauthService.logOut();
  }
}
