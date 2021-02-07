import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { ThemeService } from "./shared/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "dark-theme-yt";
  isDarkMode: boolean;
  showFiller = false;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update("light-mode")
      : this.themeService.update("dark-mode");
  }
}
