import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-lineas-de-negocio',
  templateUrl: './lineas-de-negocio.component.html',
  styleUrls: ['./lineas-de-negocio.component.css']
})
export class LineasDeNegocioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // slide seccion 4
    $('.slide-nav2').click(function ejecutar2() {

      // get current slide
      let current2 = $('.flex--active2').data('slide'),
        // get button data-slide
        next2 = $(this).data('slide');

      $('.slide-nav2').removeClass('active');
      $(this).addClass('active');

      if (current2 === next2) {
        return false;
      } else {
        $('.slider__warpper2').find('.flex__container2[data-slide=' + next2 + ']').addClass('flex--preStart2');
        $('.flex--active2').addClass('animate--end2');
        setTimeout(function() {
          $('.flex--preStart2').removeClass('animate--start2 flex--preStart2').addClass('flex--active2');
          $('.animate--end2').addClass('animate--start2').removeClass('animate--end2 flex--active2');
        }, 800);
      }
    });
  }

}
