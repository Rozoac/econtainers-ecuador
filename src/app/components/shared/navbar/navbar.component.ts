import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


// Burguer menu
  menu() {
    let menu1 = document.getElementById('menu-1');
    let menu2 = document.getElementById('menu-2');
    let menum = document.getElementById('menu-m');
    let burguerbtn = document.getElementById('burguer-btn');
    let idiomaA = document.querySelector(".idioma-a");
    let portafolio = document.querySelector(".portafolio-a");
    let idiomaB = document.querySelector(".idioma-b");
    let $nav = document.querySelector(".nav");

    menu1.classList.toggle("active");
    menu2.classList.toggle("active");
    menum.classList.toggle("active");
    $nav.classList.add("pined");
    portafolio.classList.add("idioma-scroll")
    idiomaA.classList.add("idioma-scroll");
    idiomaB.classList.add("idioma-scroll");

    burguerbtn.classList.toggle("fa-times")
    burguerbtn.classList.toggle("fa-bars")
  }

    eventoMenu() {
      let menum = document.getElementById('menu-m');

      let menu1 = document.getElementById('menu-1');
      let menu2 = document.getElementById('menu-2');
      let burguerbtn = document.getElementById('burguer-btn');
      menu1.classList.remove("active");
      menu2.classList.remove("active");
      menum.classList.remove("active");
      burguerbtn.classList.toggle("fa-times")
      burguerbtn.classList.toggle("fa-bars")
    }

    eventoMenu1() {
      let menu1 = document.getElementById('menu-1');
      let menu2 = document.getElementById('menu-2');
      let burguerbtn = document.getElementById('burguer-btn');

      if (menu1.classList.contains("active")) {
        menu1.classList.remove("active");
        menu2.classList.remove("active");
        burguerbtn.classList.toggle("fa-times")
        burguerbtn.classList.toggle("fa-bars")
      } else {
        menu1.classList.remove("active");
        menu2.classList.remove("active");


      }

    }

    constructor() { }


    ngOnInit() {

      //
      // let burguerButton = document.getElementById('burguerButton');
      // let burguerbtn = document.getElementById('burguer-btn');
      // let $menu1 = document.getElementById('menu-1');
      // let $menu2 = document.getElementById('menu-2');
      // let $nav = document.querySelector(".nav");
      // let idiomaA = document.querySelector(".idioma-a");
      // let idiomaB = document.querySelector(".idioma-b");
      //
      //
      //
      // (function() {
      //   let pinged = false;
      //   let nav = document.querySelector(".nav");
        // let stickyScrollPoint = document..clientHeight;
        // let idiomaA = document.querySelector(".idioma-a");
        // let idiomaB = document.querySelector(".idioma-b");
        // let menu = document.querySelector(".menu");
        // let portafolio = document.querySelector(".portafolio-a");

        // let lupa = (<HTMLImageElement>document.querySelector(".lupa"));

        // function pingToTop() {
        //   if (pinged) return;
        //   nav.classList.add("pined");
        //   portafolio.classList.add("idioma-scroll")
        //   idiomaA.classList.add("idioma-scroll");
        //   idiomaB.classList.add("idioma-scroll");

          // lupa.src = "assets/imgs/lupa-negra.png";
        //   pinged = true;
        // }
        //
        //
        // function unPingFromTop() {
          // if (!pinged) return;
          // nav.classList.remove("pined");
          // portafolio.classList.remove("idioma-scroll")

          // idiomaA.classList.remove("idioma-scroll");
          // idiomaB.classList.remove("idioma-scroll");
          // lupa.src = "assets/imgs/lupa.png";
          // pinged = false;
        // }
        // window.addEventListener('scroll', function(ev) {
          // if(window.scrollY < stickyScrollPoint) return unPingFromTop();
  //         let coords = nav.getBoundingClientRect();
  //         if (coords.top <= 0) return pingToTop();
  //         unPingFromTop();
  //
  //       })
  // 
  //     })();
  //
     }
  //
  }
