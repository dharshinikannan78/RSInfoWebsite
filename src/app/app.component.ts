import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import jump from 'jump.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RS INFOSOLUTION';
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;
  constructor() { AOS.init({ duration: 1000 });}
  @HostListener('window:scroll', ['$event'])
  ngOnInit(): void {

  }
  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarSupportedContent").classList.remove('show');
    this.ariaExpanded = false;
    jump(target, {
      offset: -50
    });
  }

}
