import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  activeSection: string = 'sign-in'

  constructor() { }

  ngOnInit(): void {
  }

  setActiveSection (activeSection: string) {
    this.activeSection = activeSection
  }

}
