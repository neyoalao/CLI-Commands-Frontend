import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommandDetails } from "./command-details.model";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommandDetailsService {
  private _refreshNeeded$ = new Subject<void>();

  // helps with refreshing data when changes is detected
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string = environment.baseUrl + "api/v1/Commands";
  command: CommandDetails = new CommandDetails();
  listData: CommandDetails[];

  // listData = this.getCommandsList().subscribe(value => {});
  //
  // using reactive form or model driven approach

  //in other to use this form group in other components, inject it into the app module providers

  //then create an instance of it in the commponents to be used in using dependency injection
  //import reactiveforms module in app modules to be able to use it in html forms
  //import matgridlistmodule
  // inject httpclient into the command details service to get the data from database.

  //*******I wasted time on this so note. when sending post request, it doesn't matter if an id is sent with the post request, the api indexes it right....

  // three dot destruvtiong in javascript...learn
  //angular snackbar can be used for notification

  getCommandsList(): Observable<CommandDetails[]> {
    return this.httpClient.get<CommandDetails[]>(this.baseUrl);
  }

  postCommand(): Observable<CommandDetails> {
    return this.httpClient
      .post<CommandDetails>(this.baseUrl, this.command, this.getHttpOptions())
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }

  deleteEmployee(id: number): Subscription {
    console.log(`${this.baseUrl}/${id}`);
    return this.httpClient
      .delete(`${this.baseUrl}/${id}`)
      .pipe(
        tap(() => {
          // emits a signal that there is a change
          this._refreshNeeded$.next();
        })
      )
      .subscribe(); //subscription has to be made for it to work
  }

  putPaymentDetail(): Subscription {
    return this.httpClient
      .put(`${this.baseUrl}/${this.command.id}`, this.command)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      )
      .subscribe(); //subscription is also needed
  }

  populateForm(selectedRecord: CommandDetails): void {
    this.command = Object.assign({}, selectedRecord);
  }

  // gets an updated token for each call
  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token"),
      }),
    };

    return httpOptions;
  }
}
