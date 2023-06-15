import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RS INFOSOLUTION';
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;
  serviceData: any;
  items: any
  ngOnInit(): void { }
  constructor() {
    AOS.init({ duration: 1000 });

    this.serviceData = [
      { name: "Data Annotation", src: "top-cat3.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Accessibility Service", src: "top-cat2.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Typesetting", src: "top-cat1.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Digital Publishing", src: "top-cat4.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Data Labeling", src: "top-cat5.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Website Development", src: "top-cat6.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Web Application Development", src: "top-cat2.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "Mobile App Development", src: "top-cat5.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
      { name: "E-Books", src: "top-cat1.svg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea dolor quaerat" },
    ]
    this.items = [
      { name: "Data Annotation & Labeling Service" },
      { name: "Digital Publishing" },
      { name: "Accessibility Service" },

    ]
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 50) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    } else if (this.windowScrolled && verticalOffset < 10) {
      this.windowScrolled = false;
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
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
