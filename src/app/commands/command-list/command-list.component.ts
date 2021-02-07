import { Component, OnInit, ViewChild } from "@angular/core";
import { CommandDetailsService } from "../../shared/command-details.service";
import { MatTableDataSource } from "@angular/material/table";
import { CommandDetails } from "../../shared/command-details.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CommandComponent } from "../command/command.component";
import { NotificationService } from "../../shared/notification.service";

@Component({
  selector: "app-command-list",
  templateUrl: "./command-list.component.html",
  styleUrls: ["./command-list.component.scss"],
})
export class CommandListComponent implements OnInit {
  listData: MatTableDataSource<CommandDetails>;
  wordSearch: string;
  displayedColumns: string[] = ["howTo", "platform", "commandLine", "actions"];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  list: CommandDetails[];

  constructor(
    public commandDetailsService: CommandDetailsService,
    public notificationService: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.commandDetailsService.refreshNeeded$.subscribe(() => this.getList());
    this.getList();
  }

  onSearchClear() {
    this.wordSearch = "";
    this.applyFilter();
  }

  // filters the whole list well
  applyFilter() {
    this.listData.filter = this.wordSearch.trim().toLowerCase();
  }

  onCreate() {
    this.commandDetailsService.command = new CommandDetails();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    // in other to open a component in popup, the component has to be added in app.module.ts
    // then add a reference for the popup in the parent component
    this.dialog.open(CommandComponent, dialogConfig);
    console.log("here");
  }
  getList() {
    this.commandDetailsService.getCommandsList().subscribe((value) => {
      this.listData = new MatTableDataSource<CommandDetails>(
        value as CommandDetails[]
      );
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onDelete(id: number) {
    console.log(id);
    if (confirm("Are you sure to delete this record ?")) {
      this.commandDetailsService.deleteEmployee(id);
      this.notificationService.warn("Deleted successfully !");
    }
  }

  onEdit(row: CommandDetails) {
    this.commandDetailsService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CommandComponent, dialogConfig);
  }
}
