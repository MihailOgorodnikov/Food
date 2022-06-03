window.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
        //Tabs
          timer = require('./modules/timer'),
        //timer
          modal = require('./modules/modal'),
        // modal 
          cards = require('./modules/cards'),
        // Используем классы для карточек
          forms = require('./modules/forms'),
        // Forms
          slider = require('./modules/slider'),
        // Slider 
          calc = require('./modules/calc');
        //Calc

    tabs();
    timer();
    modal();
    cards();
    forms();
    slider();
    calc();
   
});