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
      {
        no: 1, name: "Data Annotation & Labeling", src: "top-cat3.svg", content: "Data annotation refers to the process of labeling or tagging data with relevant information or annotations. It is a crucial step in machine learning and artificial intelligence projects, as it helps train and improve models by providing labeled examples for the algorithms to learn from.",
        list1: 'Image Annotation', list2: 'Text Annotation', list3: 'Audio Annotation', list4: 'Video Annotation',
        listdata1: 'This involves labeling objects, regions of interest, bounding boxes, or semantic segmentation masks within images. It can be used for object detection, image classification, or object tracking tasks.',
        listdata2: 'Text annotation involves labeling or categorizing text data, such as sentiment analysis, named entity recognition, or part-of-speech tagging.',
        listdata3: 'In audio annotation, speech or sound segments are labeled with relevant information, such as speaker identification, transcription, or emotion recognition.',
        listdata4: 'Video annotation involves labeling objects, actions, or events within videos. It can be used for activity recognition, video surveillance, or autonomous driving applications.'
      },
      { no: 2, name: "Digital Publishing", src: "top-cat4.svg", content: "Digital publishing refers to the process of creating and distributing content in digital formats, such as e-books and interactive media. It involves using digital technologies and platforms to produce and disseminate written, visual, and multimedia content to a wide audience." },
      { no: 3, name: "Accessibility Service", src: "top-cat2.svg", content: "An accessible PDF is a document that is universally easy to use and meets established accessibility standards. It enables most people to view, read, or interact with your document. We have immense experience in Accessibility PDF. Accessibility PDF/UA, Section 508, ADA, AODA." },
    ],
      this.items = [{ name: "Data Annotation & Labeling" },
      { name: "Digital Publishing" },
      { name: "Accessibility Service" }]


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
