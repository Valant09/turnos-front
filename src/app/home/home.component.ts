import { Component, EventEmitter, Output, OnInit,Renderer2 } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor(private oauthService: OAuthService,private router: Router){
    this.configure();
  }

  ngOnInit() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('input[name="slider"]');
    const maxIndex = slides.length;

    setInterval(() => {
      if ('checked' in slides[currentIndex]) {
        (slides[currentIndex] as HTMLInputElement).checked = false;
        currentIndex = (currentIndex + 1) % maxIndex;
        (slides[currentIndex] as HTMLInputElement).checked = true;
      }
    }, 3000); // Cambiar cada 3 segundos
  }

  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
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
    console.log('login');
    window.location.href = 'http://localhost:8080';
    // this.oauthService.initImplicitFlowInternal();

  }
//Logica para redirigir a la pagina de admin o user con el token
// login(): void {
//   this.oauthService.initImplicitFlow().then(() => {
//     const token = this.oauthService.getAccessToken();
//     if (token) {
//       const decodedToken = jwt_decode(token);
//       if (decodedToken.roles.includes('admin')) {
//         this.router.navigate(['/admin']);
//       } else if (decodedToken.roles.includes('user')) {
//         this.router.navigate(['/user']);
//       }
//     } else {
//       this.router.navigate(['/home']);
//     }
//   });
// }
// }


  logout(): void {
    this.oauthService.logOut();
    this.router.navigate(['']);

  }

}
