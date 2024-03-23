import { Component, OnInit } from '@angular/core';
import { BlockchainService } from './blockchain.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import contractABiAS from 'src/assets/abi/UPIToken/UPIabi.json';



@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
})
export class BlockchainComponent implements OnInit{

  totalSupply: number | undefined;
  account: string | undefined;
  blockchainForm!: FormGroup;
  contractInputValue!: string;
  
  accountConnectedToBlockchain: boolean = false;

  constructor(private blockchainService: BlockchainService,
              private formbuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.blockchainForm = this.formbuilder.group({
    contractInputValue: [''],
    accountConnectedToBlockchain: false,
    totalSupply: ['']
    })
  }

  connectAndLoadData() {
    this.blockchainService.connectAccount().then(() => {
      this.accountConnectedToBlockchain= true;
      this.blockchainService.loadContract();
      this.blockchainService.getTotalSupply().subscribe({
        next: (supply) => {
          this.totalSupply = supply;
          console.log('Total Supply:', this.totalSupply);
        },
        error: (error) => console.error(error)
      });
    });
  }
 
 

}
