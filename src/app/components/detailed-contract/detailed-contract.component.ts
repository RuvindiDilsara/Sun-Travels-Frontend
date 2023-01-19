import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractComponent } from 'src/app/contract/contract.component';


@Component({
  selector: 'app-detailed-contract',
  templateUrl: './detailed-contract.component.html',
  styleUrls: ['./detailed-contract.component.css']
})
export class DetailedContractComponent implements OnInit{
  
  contract: ContractComponent | undefined;
  
  constructor (private route: ActivatedRoute){

  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const contractIDFromRoute = Number(routeParams.get('contractId'));
    console.log(contractIDFromRoute);
    }
}
