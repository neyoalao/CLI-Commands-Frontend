import { Component } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { ThemeService } from "./shared/theme.service";
import { CommandDetails } from "./shared/command-details.model";
import { CommandComponent } from "./commands/command/command.component";
import { CommandDetailsService } from "./shared/command-details.service";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "dark-theme-yt";
  isDarkMode: boolean;
  showFiller = false;

  constructor(
    private themeService: ThemeService,
    public dialog: MatDialog,
    public commandDetailsService: CommandDetailsService
  ) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  onLogin() {
    this.commandDetailsService.command = new CommandDetails();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    // in other to open a component in popup, the component has to be added in app.module.ts
    // then add a reference for the popup in the parent component
    this.dialog.open(LoginComponent, dialogConfig);
    console.log("here");
  }

  toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update("light-mode")
      : this.themeService.update("dark-mode");
  }
}
