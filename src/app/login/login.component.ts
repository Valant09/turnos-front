import { Component, EventEmitter, OnInit,Output} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {
  @Output() userLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    // private userServiceService:UserServiceService,
    // private router:Router,
 
  ) {
  
  }

  ngOnInit(){
  
    console.log('LoginComponent initialized');
  }

  login(usuario:string,contrasena:string){

    if(!usuario || !contrasena){
      alert('Ingrese los datos completos')
    }
    else{

      // const encryptedusuario = CryptoJS.AES.encrypt(usuario, environment.secretKey).toString();
      // const encryptedcontrasena = CryptoJS.AES.encrypt(contrasena, environment.secretKey).toString();

      console.log({
        usuario: usuario,
        contrasena: contrasena
      });

      // this.userServiceService.validateUser({
      //   usuario: encryptedusuario,
      //   contrasena: encryptedcontrasena

      // }).subscribe(
      //   res => {
      //     this.userServiceService.setToken(res.token);
      //     this.userServiceService.setUserLoggedIn();
      //     console.log("home!!!");
      //     console.log(res.token);
      //     this.userLoggedIn.emit(true); // Emitir evento de inicio de sesión exitoso
      //     this.userServiceService.setLoggedIn(true);
      //     this.router.navigate(['home']);
      //   },
      //   error => {
      //     if (error.status === 400) {
      //       console.log("Credenciales incorrectas");
      //       alert('Credenciales incorrectas. Por favor, verifique su usuario y contraseña.');
      //     } else {
      //       console.error("Error en la solicitud:", error);
      //       // Manejar otros posibles errores aquí
      //     }
      //   }
      // );
      // Borrar cuando se implemente la API
      // this.router.navigate(['home'])
    }
  }

}

