import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  activeSection: string = 'drivers'

  constructor() { }

  ngOnInit(): void {
  }

  setActiveSection (activeSection: string) {
    this.activeSection = activeSection
  }


}
