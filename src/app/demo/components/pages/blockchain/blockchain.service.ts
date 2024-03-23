import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { from, Observable } from 'rxjs';
import contractABiAS from 'src/assets/abi/UPIToken/UPIabi.json';


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private web3: Web3;
  private contract: any;
  private contractAddress = '0x4866FBa158Bbb791DC3164DA8A489E7901282a41'; 

  constructor() {
    // Connect to the blockchain network using the QuikNode URL
    this.web3 = new Web3('https://yolo-solitary-tree.ethereum-sepolia.quiknode.pro/41a2e4df38b4339d0e396b905798534d46b461e4/');

    // Check if MetaMask is available and request accounts
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => this.loadContract())
        .catch(error => console.error('Error connecting to MetaMask:', error));
    } else {
      console.error('MetaMask is not installed!');
    }
  }
  async connectAccount(): Promise<void> {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  }

  loadContract(): void {
    this.contract = new this.web3.eth.Contract(contractABiAS, this.contractAddress);
  }

  getTotalSupply(): Observable<any> {
    if (!this.contract) {
      throw new Error('Contract is not loaded!');
    }
    return from(this.contract.methods.totalSupply().call());
  }
}
