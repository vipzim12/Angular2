import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".listproduct").click(function () {
      $(".menushow").toggle();
    });
    // top menu
    if ($(this).scrollTop() >= $('.top-header').height() + $('.mid-header').height() && $(window).width() >= 992) {
      $('.mid-header').addClass("fixed");
    }
    else {
      $('.mid-header').removeClass("fixed");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() >= $('.top-header').height() + $('.mid-header').height() && $(window).width() >= 992) {
        $('.mid-header').addClass("fixed");
      }
      else {
        $('.mid-header').removeClass("fixed");
      }
    });

    $('#LeftPush').click(function () {
      if ($('body').hasClass("offset-push-right")) {
        $('body').removeClass("offset-push-right");
        $('.headerPanelMobile').removeClass("offset-push-right");
        $('.offset-menu-left').removeClass("offset-menu-left-open");
      }
      else {
        $('body').addClass("offset-push-right");
        $('.headerPanelMobile').addClass("offset-push-right");
        $('.offset-menu-left').addClass("offset-menu-left-open");
      }

    });

    //Sroll-To-Top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.bttop').fadeIn();
      } else {
        $('.bttop').fadeOut();
      }
    });
    $('.bttop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
    });
  }

}
