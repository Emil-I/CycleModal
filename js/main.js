"use strict";

let names = ['Антон', 'Игорь', 'Андрей', 'Дмитрий', 'Евгений', 'Олег', 'Вадим', 'Александр', 'Назар', 'Богдан', 'Вячеслав', 'Илья', 'Виталий', 'Виктор', 'Егор', 'Вениамин', 'Николай', 'Василий', 'Глеб', 'Давид', 'Кузьма'];
let name_index = -1;

let citys = ['Петрозаводска', 'Москвы', 'Санкт-Петербурга', 'Нижнего Новгорода', 'Новосибирска', 'Красноярска', 'Тюмени', 'Хабаровска', 'Самары', 'Мурманска', 'Барнаула', 'Пензы', 'Тамбова', 'Томска', 'Ялты', 'Твери'];
let city_index = -1;

// Значение нового показа всекундах устанавливается в delayInterval;
let delayInterval = [5, 20, 10];
let delayInterval_index = 0;

let delayShow = 3000;


let getId = function(id) {
  return document.getElementById(id);
}



let show = function(time) {
  let ptom = new Promise(function(resolve) {
      setTimeout(function() {
        let name_index_random = Math.floor(Math.random() * names.length);
        let city_index_random = Math.floor(Math.random() * citys.length);

        getId('cycle_modal_name').innerHTML = names[name_index_random];
        getId('cycle_modal_city').innerHTML = citys[city_index_random];

        getId('cycle_modal').classList.add('cycle-modal-main_show');
        resolve(true);
      }, time);
    })
    .then(function() {
      setTimeout(function() {
        hide();
      }, delayShow);
    });
}

let hide = function() {
  getId('cycle_modal').classList.remove('cycle-modal-main_show');
  delayInterval_index++;
  if (delayInterval_index >= delayInterval.length) {
    delayInterval_index = 0;
  }
  show(delayInterval[delayInterval_index] * 1000);
}

let init = function() {
  show(delayInterval[0] * 1000);
}


init();
