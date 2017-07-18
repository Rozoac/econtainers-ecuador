import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
       (function () {
      let pinged = false;
      let nav = document.querySelector(".nav");
      let idiomaA = document.querySelector(".idioma-a");
      let idiomaB = document.querySelector(".idioma-b");
      let lupa = document.querySelector(".lupa");
      let stickyScrollPoint= document.querySelector(".slider__warpper").clientHeight;

      function pingToTop() {
        if (pinged) return;

        nav.classList.add("pined");
        idiomaA.classList.add("idioma-scroll");
        idiomaB.classList.add("idioma-scroll");
        pinged = true;
      }
      function unPingFromTop() {
        if(!pinged) return;
        nav.classList.remove("pined");
        idiomaA.classList.remove("idioma-scroll");
        idiomaB.classList.remove("idioma-scroll");

        pinged = false;
      }
      window.addEventListener('scroll', function (ev) {
        if (window.scrollY == stickyScrollPoint) return unPingFromTop();
        let coords = nav.getBoundingClientRect();
        if (coords.top <= 0) return pingToTop();
        unPingFromTop();

      })

    })();

  }

}
