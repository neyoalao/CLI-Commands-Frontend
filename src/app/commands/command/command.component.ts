import { Component, OnInit } from '@angular/core';
import {CommandDetailsService} from "../../shared/command-details.service";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {

  constructor(public commandService:CommandDetailsService) { }

  ngOnInit(): void {
  }

    onClear(){
    this.commandService.form.reset();
    this.commandService.initializeFormGroup();
    }
}
