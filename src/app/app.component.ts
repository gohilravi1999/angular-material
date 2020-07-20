import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-demo';
  notification=0;
  showSpinner = false;
  selectedValue:string;
  options :string[]= ['Angular','React','Vue'];

constructor(private snackBar:MatSnackBar){

}

  loadData(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },2000);
  }

  logChange(index:number){
    console.log(index);
  }

  openSnackbar(message,action){
    this.snackBar.open(message,action);
    setTimeout(()=>{
      this.snackBar.dismiss();
    },2000);
    
  }
}
