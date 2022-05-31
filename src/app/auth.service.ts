import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:4200/api'; //la url que correspodna en cada caso
  token: string | undefined;

  constructor(private http: HttpClient,private router:) { }
  login(email: string, password: string) {
    this.http.post{this.url + '/authenticate', {email: email, password: password});
    .subscribe{(resp: any) => {
      //redirecionamos al usuarlo a su perfil 
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
      })
  };
}

 // para cerrar sesion elinamos el token del localstorate
 logout() {
   localStorage.removeItem('token');
 }

 // un servicio para vericiar si existe la sesion 
 public get login(): boolean {
   return (localStorage.getItem('token') !== null);
 }
}