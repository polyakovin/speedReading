import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // init() {
  //   $(document).ready(function(){
  //     $("#timer").click(function () {
  //       $("#timer").html("Погнали! Таймер запущен. Теперь не отвлекайся от чтения!");

  //         setTimeout(function () {
  //           $('#timer_fin')[0].play();
  //         $("#timer").html("Ну всё, хорош!");

  //           setTimeout(function () {
  //           $("#timer").html("Молодец!");

  //             setTimeout(function () {
  //             $("#timer").html("Хочешь ещё раз?");
  //             }, 1000);
  //           }, 2000);
  //         }, 600000);	// 10 минут
  //     });

  //     $("#timer2").click(function () {
  //       $("#timer2").html("Погнали! Таймер запущен. Не отвлекайся от чтения и продолжай стучать!");

  //         setTimeout(function () {
  //           $('#timer_fin')[0].play();
  //         $("#timer2").html("Ну всё, хватить стучать! А то с соседями придётся разговаривать.");

  //           setTimeout(function () {
  //           $("#timer2").html("Молодец!");

  //             setTimeout(function () {
  //             $("#timer2").html("Можешь ещё раз попробовать...");
  //             }, 1000);
  //           }, 2000);
  //         }, 600000);	// 10 минут
  //     });

  //     $("#short_metronome_timer").click(function () {
  //       metronomeDuration = 120000;

  //       metronome.call(this);

  //       $("#short_metronome_timer").hide(0);

  //         setTimeout(function () {
  //           $('#timer_fin')[0].play();
  //         $("#short_metronome_timer").html("Ну всё, хорош!");
  //         $("#short_metronome_timer").show(0);

  //           setTimeout(function () {
  //           $("#short_metronome_timer").html("Молодец!");

  //             setTimeout(function () {
  //             $("#short_metronome_timer").html("Будешь ещё раз?");
  //             }, 1000);
  //           }, 2000);
  //         }, metronomeDuration);	// 2 минуты
  //     });

  //     $("#metronome_timer").click(function () {
  //       metronomeDuration = 600000;

  //       metronome.call(this);

  //       $("#MetronomeSettings").show(0);
  //       $(".dark_background").show(0);
  //       $("#metronome_timer").hide(0);

  //         setTimeout(function () {
  //           $('#timer_fin')[0].play();
  //         $("#metronome_timer").html("Ну всё, хорош!");
  //         $("#MetronomeSettings").hide(0);
  //         $(".dark_background").hide(0);
  //         $("#metronome_timer").show(0);

  //           setTimeout(function () {
  //           $("#metronome_timer").html("Молодец!");

  //             setTimeout(function () {
  //             $("#metronome_timer").html("Хочешь ещё раз?");
  //             }, 1000);
  //           }, 2000);
  //         }, metronomeDuration);	// 10 минут
  //     });

  //     // Слайдеры для метронома
  //     $("#tempo_slider").slider({
  //          range: "min",
  //       value: 60,
  //       min: 1,
  //       max: 1200,
  //       step: 1,
  //       slide: function( event, ui ) {
  //         $("#tempo").val( ui.value ).change();
  //       }
  //     });
  //     $("#tempo").val($("#tempo_slider").slider("value"));

  //     $("#frequency_slider").slider({
  //          range: "min",
  //       value: 440,
  //       min: 1,
  //       max: 24000,
  //       step: 1,
  //       slide: function( event, ui ) {
  //         $("#frequency").val( ui.value ).change();
  //       }
  //     });
  //     $("#frequency").val($("#frequency_slider").slider("value"));

  //     $("#delay_slider").slider({
  //          range: "min",
  //       value: 50,
  //       min: 1,
  //       max: 1000,
  //       step: 0.5,
  //       slide: function( event, ui ) {
  //           $("#delay").val( ui.value ).change();
  //       }
  //     });
  //     $("#delay").val($("#delay_slider").slider("value"));
  //   });
  // }
}
