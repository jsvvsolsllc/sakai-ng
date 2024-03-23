import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainRoutingModule } from './blockchain-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BlockchainComponent } from './blockchain.component';
import { BlockchainService } from './blockchain.service';

@NgModule({
  declarations: [BlockchainComponent],
  imports: [
    CommonModule,
    BlockchainRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers:[
    BlockchainService
  ]
})
export class BlockchainModule { }
