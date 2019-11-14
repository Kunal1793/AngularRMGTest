import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Accounts } from '../account/account.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  value: number = 0;
  AccountsList: Accounts[] = [];
  LoginAccount: Accounts;
  ShowAccounts = false;
  constructor(private operationService: OperationsService, private router: Router) { }

  ngOnInit() {
    this.DisplayAccounts()
  }

  
  DisplayAccounts(){
    this.operationService.DisplayAccounts().subscribe(
      (AccountData) => {
        console.log(AccountData);
        this.AccountsList = AccountData
      });
  }

  GetSingleAccount(Account: Accounts) {
    this.LoginAccount = Account;
    this.operationService.DisplayResourceRequests(this.LoginAccount);
    this.router.navigate(['RequestList']);
  }

}
