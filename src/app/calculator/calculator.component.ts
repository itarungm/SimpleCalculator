import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  reset:boolean=false;
  fnum:number=0;
  lnum:number=0;
  addition:number;
  addDiv=false;
  subDiv=false;
  mulDiv=false;
  divDiv=false;
  show;
  add(){
    if (this.fnum==0 && this.lnum==0 || this.fnum==null&&this.lnum==null) {
      alert("Please, Give a Proper Value!!");
    } else{
      this.addDiv=true;
      this.subDiv=false;
      this.mulDiv=false;
      this.divDiv=false;
      this.addition = this.fnum+this.lnum;
    this.show="The Sum of"
    }

  }
  subtraction:number;
  sub(){
    if (this.fnum==0 && this.lnum==0 || this.fnum==null&&this.lnum==null) {
      alert("Please, Give a Proper Value!!");
    } else{
      this.subDiv=true;
      this.addDiv=false;
      this.mulDiv=false;
      this.divDiv=false;
      this.subtraction = this.fnum-this.lnum;
    this.show="The Subtraction of"
    }

  }
  multiplication:number;
  mul(){
    if (this.fnum==0 && this.lnum==0 || this.fnum==null&&this.lnum==null) {
      alert("Please, Give a Proper Value!!");
    } else{
      this.mulDiv=true;
      this.addDiv=false;
      this.subDiv=false;
      this.divDiv=false;
      this.multiplication = this.fnum*this.lnum;
    this.show="The Multipliction of"
    }

  }
  division:number;
  div(){
    if (this.fnum==0 && this.lnum==0 || this.fnum==null && this.lnum==null) {
      alert("Please, Give a Proper Value!!");
    } else{
      this.divDiv=true;
      this.addDiv=false;
      this.subDiv=false;
      this.mulDiv=false;
      this.division = this.fnum/this.lnum;
      this.show="The Division of"
    }

  }
res(){
  this.reset=true;
  this.fnum=0;
  this.lnum=0;
  this.divDiv=false;
  this.addDiv=false;
  this.subDiv=false;
  this.mulDiv=false;
}
resetFalse(){
  this.reset=false;
}

  constructor() { }

  ngOnInit(): void {
  }

}


