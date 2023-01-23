import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractComponent } from 'src/app/contract/contract.component';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-detailed-contract',
  templateUrl: './detailed-contract.component.html',
  styleUrls: ['./detailed-contract.component.css']
})
export class DetailedContractComponent implements OnInit{
  
  contractDetails = <any>[];
  
  constructor (private route: ActivatedRoute, private api: ApiService){

  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const contractIDFromRoute = Number(routeParams.get('contractId'));
    console.log(contractIDFromRoute);
    this.getContract(contractIDFromRoute);
    }
  
    getContract(contractIDFromRoute: number){
      this.api.getContractDetails(contractIDFromRoute)
      .subscribe({
        next: (res)=>{
          console.log(res);
          this.contractDetails = res;
          console.log("contract details", this.contractDetails);
        },
        error: (err)=>{
          alert("Error while fetching the Records!")
        }
      })
    }
}
