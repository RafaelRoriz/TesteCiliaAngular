import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from './Client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clients: Client[] = [];

  constructor(private clientService: ClientService){}

  ngOnInit(): void {
    
  }

 /* public getClients(): void{
    this.clientService.getClients().subscribe(
      (Response: Client[]) => {
        this.clients = Response;
      },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  public onAddClient(addForm: NgForm): void{
    document.getElementById('add-client-form')?.click();
    this.clientService.addClient(addForm.value).subscribe(
      (Response: Client) => {
        console.log(Response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onUpdateClient(client: Client): void{
    this.clientService.updateClient(client).subscribe(
      (Response: Client) => {
        console.log(Response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }*/

  /*public onOpenModal(client: Client, mode: string): void{
   
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-togle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addClientModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', '#updateClientModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteClientModal');
    }
    container?.appendChild(button);
    
    button.click();
    
  }*/
}
