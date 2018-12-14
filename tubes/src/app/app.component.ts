import { Component } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tubes';

  selectedFile:File= null;

  constructor(private http: HttpClient){}

  onFileSelected(event){
    this.selectedFile= event.target.files[0];
  }
onUpload(){
  const fd = new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name);
  this.http.post('https://us-centrall-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd,{
    reportProgress: true,
    observe: 'events'
  })
  .subscribe(res =>{
    console.log(res);
  });
}
}
