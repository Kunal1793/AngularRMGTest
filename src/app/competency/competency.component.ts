import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { ListOfRequest } from '../list-of-request/ListOfRequest.model';

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  CompetencyRequests: ListOfRequest[] = [];
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.getRequestforResources();

  }

  getRequestforResources() {
    this.operationService.GetCompetencyRequests().subscribe((Data) => 
    {
      console.log(Data);
      this.CompetencyRequests = Data;
    });

  }

  CloseRequest(Request: ListOfRequest) {
    console.log(Request);

  }

}
