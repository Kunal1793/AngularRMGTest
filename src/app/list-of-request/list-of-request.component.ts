import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Accounts } from '../account/account.model';
import { ListOfRequest } from './ListOfRequest.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-list-of-request',
  templateUrl: './list-of-request.component.html',
  styleUrls: ['./list-of-request.component.css']
})
export class ListOfRequestComponent implements OnInit {

  
  LoggedInAccount: Accounts;
  ShowAccounts = false;
  UpdatedRequests: ListOfRequest[] = [];
  NewRequest: ListOfRequest;

  minDate: Date;
  AccountId: number;
  constructor(private operationService: OperationsService, private router: Router) { 
    this.minDate = new Date();
  }

  ngOnInit() {
    this.GetLoggedinAccountID();
  }

  GetLoggedinAccountID()
  {
    this.ShowAccounts = !this.ShowAccounts;
    this.LoggedInAccount = this.operationService.ShowLoggedInAccountDetails();
    console.log("List of Request Component getting the selected Account from Service ");
    console.log(this.LoggedInAccount);
    this.getAccountDetails(this.LoggedInAccount.id)
    this.AccountId = this.LoggedInAccount.id;
    console.log(this.AccountId);
  }

  getAccountDetails(AccountID: number) {
    console.log("Display of Account details based on selected ID");
    this.operationService.DisplayListOfRequestsById(AccountID);
    this.operationService.getListofRequests().subscribe(
      (UpdatedData)=> {
        this.UpdatedRequests = UpdatedData
        console.log(UpdatedData);
      });
    // .subscribe(
    //   (AccountsData)=>
    //   {
    //     this.ListOfRequests = AccountsData
    //     console.log(AccountsData);
    //     //this.RequestList.next(this.ListOfRequests);
    //   });

  }

  SubmitForm(AccountsForm: NgForm) {
    console.log(AccountsForm.value);
    this.operationService.PostListofRequests(AccountsForm.value).subscribe(
      (Data) => { 
        console.log(Data);
        this.NewRequest = Data;
        console.log("Account ID");
        console.log(this.NewRequest.accountID);
        this.getAccountDetails(this.NewRequest.accountID);
      }
    );
    AccountsForm.resetForm();
  }
}
