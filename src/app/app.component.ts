import { Component } from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app Works!';
  private apiUrl = 'http://localhost:51071/api/ContractorDashboard/GetLoadType';

  //private apiUrl = 'http://localhost:60524/api/Usertbls';

   // private apiUrl = 'http://address-book-demo.herokuapp.com/api/contacts';
  data:any = {};
  

constructor(private http:Http)
{
console.log('Hello there');
this.getContacts();
  this.getData();
}
getData(){
  return this.http.get(this.apiUrl)
  .map((res:Response) => res.json())
}
getContacts(){
  this.getData().subscribe(data => {
    console.log(data);
    this.data = data
  })
}





}
