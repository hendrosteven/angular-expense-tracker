import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentDateTime = null;

  constructor(private router: Router) { 

    setInterval(()=>{
      this.currentDateTime = Date.now();
    }, 1000);
    
  }

  ngOnInit(): void {
    this.router.navigate(['home']);
  }

  onLogoutClick(){

  }

}
