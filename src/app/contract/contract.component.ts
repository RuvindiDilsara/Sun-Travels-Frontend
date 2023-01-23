import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddContractDialogComponent } from '../components/add-contract-dialog/add-contract-dialog.component';
import { ApiService } from '../services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddHotelFormComponent } from '../components/add-hotel-form/add-hotel-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetailedContractComponent } from '../components/detailed-contract/detailed-contract.component';
import { ContractDetailsComponent } from '../components/contract-details/contract-details.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  displayedColumns: string[] = ['id', 'hotelName', 'startingDate', 'endingDate', 'markupValue', 'view'];
  dataSource!: MatTableDataSource<any>;
  contracts !: [];
  hotels = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService, private _snackBar: MatSnackBar){
  }
  ngOnInit(): void {
    this.getAllContracts();
    this.getAllHotels();
  }

  openDialog() {
    this.dialog.open(AddContractDialogComponent, {
      width: '50%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllContracts();
      }
    })
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  openForm() {
    this.dialog.open(AddHotelFormComponent, {
      width: '50%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllHotels();
      }
    })
   
  }
  getAllHotels() {
    this.api.getHotels()
    .subscribe({
      next:(res)=>{
        this.hotels = res;
      },
      error: (err)=>{
        this.openSnackBar("Error while fetching the Records!", "close");
      }
    })
  }

  getAllContracts(){
    this.api.getContract()
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.contracts = res;
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        this.openSnackBar("Error while fetching the Records!", "close");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openContractDetails(contract: any){
    const dialogRef = this.dialog.open(ContractDetailsComponent, {
      data: contract,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
