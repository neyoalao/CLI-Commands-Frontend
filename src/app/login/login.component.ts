import { Component, OnInit } from "@angular/core";
import { CommandDetailsService } from "../shared/command-details.service";
import { MatDialogRef } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../shared/authentication.service";
import { LoginCreden } from "../shared/login-creden.model";
import { CommandDetails } from "../shared/command-details.model";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public dialogRef: MatDialogRef<LoginComponent>;
  isLoggedIn: boolean;

  constructor(
    public authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onSubmit(ngForm: NgForm) {
    this.authenticationService.login().subscribe((value) => {
      this.isLoggedIn = value.result.succeded;
      this.notificationService.success("Welcome Back " + value.username);
      localStorage.setItem("token", value.token);
      console.log(value);
    });
    // this.authenticationService.loginCredentials = new LoginCreden();
    this.resetForm(ngForm);
    console.log(ngForm);
  }
  onClear(ngForm: NgForm) {
    this.resetForm(ngForm);
  }

  resetForm(ngForm: NgForm) {
    ngForm.form.reset();
    this.authenticationService.loginCredentials = new LoginCreden();
  }
}
