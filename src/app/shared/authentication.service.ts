import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LoginCreden } from "./login-creden.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  baseUrl: string = environment.baseUrl + "identity";
  isLoggedIn: boolean;
  loginCredentials: LoginCreden = new LoginCreden();

  constructor(private httpClient: HttpClient) {}

  login() {
    return this.httpClient.post<any>(this.baseUrl, this.loginCredentials);
    // this.isLoggedIn = true;
  }
}
