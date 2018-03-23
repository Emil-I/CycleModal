(function() {

  "use strict";

  var global = window;

  // Устанавливает массив имен
  // Type Arr
  var names;
  var name_index = -1;

  // Устанавливает массив городов
  // Type Arr
  var citys;
  var city_index = -1;

  // Значение показа в секундах устанавливается в delayIntervals;
  // Это интервал между показами модалок
  // Type Arr
  var delayIntervals;

  // Устанавливает задержу показа модалки
  // Type Number
  var delayShow;


  // TODO Установить свой шаблон
  // ---> customTemplate

  var link = '#';


  // Дефолтное значение если ничего не задано
  var defaultOption = {
    disabledLink: false,
    delayShow: 3,
    dIntervals: [1, 1, 1],
    names: ['Антон', 'Игорь', 'Егор', 'Вениамин', 'Николай', 'Василий', 'Глеб', 'Давид', 'Кузьма'],
    citys: ['Петрозаводска', 'Барнаула', 'Пензы', 'Тамбова', 'Томска', 'Ялты', 'Твери'],
    customTemplate: "<a class=\"cycle-modal-main\" href='".concat(link, "' id='cycle_modal'>\n        <div class=\"cycle-modal-main__img\"></div>\n        <div class=\"cycle-modal-main__text\">\n          <p>\n            <span id='cycle_modal_name'></span> \u0438\u0437 <span id='cycle_modal_city'></span> \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0442 =)\n          </p>\n        </div>\n      </a>")
  };

  var delayInterval_index = 0;



  var getId = function(id) {
    return document.getElementById(id);
  }



  var show = function(time) {
    var ptom = new Promise(function(resolve) {
        setTimeout(function() {
          var name_index_random = Math.floor(Math.random() * names.length);
          var city_index_random = Math.floor(Math.random() * citys.length);

          getId('cycle_modal_name').innerHTML = names[name_index_random];
          getId('cycle_modal_city').innerHTML = citys[city_index_random];

          getId('cycle_modal').classList.add('cycle-modal-main_show');
          resolve(true);
        }, time);
      })
      .then(function() {
        setTimeout(function() {
          hide();
        }, delayShow * 1000);
      });
  }

  var hide = function() {
    getId('cycle_modal').classList.remove('cycle-modal-main_show');
    delayInterval_index++;
    if (delayInterval_index >= delayIntervals.length) {
      delayInterval_index = 0;
    }
    show(delayIntervals[delayInterval_index] * 1000);
  }


  var appendTamplate = function(customTemplate) {
    getId('cycleModal').innerHTML = customTemplate;
  }


  var disabledLink = function(disabled) {
    if (disabled) {
      getId('cycle_modal').classList.add('CycleModal-disable-link');

      var getLink = document.getElementsByClassName('CycleModal-disable-link')[0];
      getLink.addEventListener("click", function(e) {
        e.preventDefault();
      });
    }
  }





  global.CycleModal = function(option) {

    if (option && option.customTemplate) {
      appendTamplate(option.customTemplate);
    } else {
      appendTamplate(defaultOption.customTemplate);
    }

    if (option && option.delayIntervals) {
      delayIntervals = option.delayIntervals;
    } else {
      delayIntervals = defaultOption.dIntervals;
    }

    if (option && option.names) {
      names = option.names;
    } else {
      names = defaultOption.names;
    }

    if (option && option.citys) {
      citys = option.citys;
    } else {
      citys = defaultOption.citys;
    }

    if (option && option.delayShow) {
      delayShow = option.delayShow;
    } else {
      delayShow = defaultOption.delayShow;
    }

    if (option && option.disabledLink) {
      disabledLink(option.disabledLink);
    } else {
      disabledLink(defaultOption.disabledLink);
    }

    show(delayIntervals[0] * 1000);
  }

})();
