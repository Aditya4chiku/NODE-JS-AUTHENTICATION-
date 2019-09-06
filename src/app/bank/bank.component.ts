import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  filteredStatus=''
  constructor(private _bankService:BankService) { }
banks:any;
  ngOnInit() {
    
this._bankService.getBankDetails().subscribe(data=>this.banks=data);
console.log(this.banks) 
}
  

}
