import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };
  constructor(public snackBar: MatSnackBar) {}

  success(message: string) {
    // to edit the color of the popup notification using css... check styles.css file for the definition
    this.config["panelClass"] = "success";
    this.snackBar.open(message, "", this.config);
  }

  warn(message: string) {
    this.config["panelClass"] = "warn";
    this.snackBar.open(message, "", this.config);
  }
}
