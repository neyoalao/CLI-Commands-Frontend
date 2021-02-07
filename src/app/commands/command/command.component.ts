import { Component, OnInit } from "@angular/core";
import { CommandDetailsService } from "../../shared/command-details.service";
import { NgForm } from "@angular/forms";
import { NotificationService } from "../../shared/notification.service";
import { MatDialogRef } from "@angular/material/dialog";
import { CommandDetails } from "../../shared/command-details.model";

@Component({
  selector: "app-command",
  templateUrl: "./command.component.html",
  styleUrls: ["./command.component.scss"],
})
export class CommandComponent implements OnInit {
  constructor(
    public commandDetailService: CommandDetailsService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CommandComponent>
  ) {}

  ngOnInit(): void {}

  onClear(form: NgForm) {
    this.resetForm(form);
  }

  onSubmit(form: NgForm) {
    if (this.commandDetailService.command.id == 0) {
      this.commandDetailService.postCommand().subscribe();
    } else {
      this.commandDetailService.putPaymentDetail();
    }
    this.resetForm(form);
    this.notificationService.success("Successfully Submitted");
    this.onClose(form);
  }

  onClose(form: NgForm) {
    this.resetForm(form);
    this.dialogRef.close();
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.commandDetailService.command = new CommandDetails();
  }
}
