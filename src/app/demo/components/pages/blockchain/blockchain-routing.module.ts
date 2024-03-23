import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockchainComponent } from './blockchain.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BlockchainComponent }
    ])],
    exports: [RouterModule]
})
export class BlockchainRoutingModule { }
