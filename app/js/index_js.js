var main_nav = document.querySelector('.main_nav');
var burger_open = document.querySelector('.burger_open');
var burger_close = document.querySelector('.burger_close');
var menu_link_mass = document.getElementsByClassName('menu_link');

burger_open.onclick = function() {
  main_nav.classList.add('menu_open');
}

burger_close.onclick = function() {
  main_nav.classList.remove('menu_open');
}

jQuery(function($){
     $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let block = $(".menu_wrapper"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        let menu_wrapper = $(".menu_wrapper"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
              && block.has(e.target).length === 0
                && !menu_wrapper.is(e.target)
                  && menu_wrapper.has(e.target).length === 0) {
              main_nav.classList.remove('menu_open');
        }
      });
});

for (var i = 0; i < menu_link_mass.length; i++) {
  menu_link_mass[i].addEventListener('click', function(){
    main_nav.classList.remove('menu_open');
  });
}

/////////////////////////////Instagram



$('.document').ready(function($){
  var tok = '12156444054.7a1c57c.036a5126b2944449a64b520e9c7e0253', // я уже давал ссылку чуть выше
      userid = 12156444054, // ID пользователя, можно выкопать в исходном HTML, можно использовать спец. сервисы либо просто смотрите следующий пример :)
      number = 20; // ну это понятно - сколько фоток хотим вывести

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: tok, count: number}, // передаем параметры, которые мы указывали выше
    success: function(result){

      for( x in result.data ){
        $('.instagram_inner').append('<div class="insta_img"><a href="'+result.data[x].link+'" target="_blank" class="insta_img_wrapper"><img class="instagram_img" src="'+result.data[x].images.low_resolution.url+'"></a></div>');         
         // result.data[x].images.standard_resolution.url //- URL картинки 612х612
         // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
         // result.data[x].images.thumbnail.url //- URL картинки 150х150
         //<a href="'+result.data[x].link+'" target="_blank"></a>
      }
      $('.instagram_inner').addClass('owl-carousel');
      $('.instagram_inner').addClass('instagram_inner_carousel');
      $('.instagram_inner_carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayHoverPause: false,
        responsiveClass: true,
       responsive: {
          0: {
            items: 1
          },
          400: {
             items: 2
          },
          575: {
             items: 2
          },
          767: {
             items: 3
          },          
          992: {
             items: 5
          },
       },
        dots: false,
      }); 
    },      

    error: function(result){
      console.log('error instagram code')
    }
  });
});
/////////////////////////////end Instagram

//main page videoblock
var videoLinkMass = document.querySelector('.video_name_list').getElementsByTagName('li');
var videoMass = document.querySelector('.video_wrapper_list').getElementsByTagName('li');

videoLinkMass[0].classList.add('active_video');
videoMass[0].classList.remove('d-none');

for (var i = 0; i < videoLinkMass.length; i++) {
  videoLinkMass[i].addEventListener('click', function() {
   addAllVideoMassDNone();
   showVideoAndPaintLink(this);

   if(document.body.clientWidth < 769){
    scrollToElement();
   }

  });
}

function scrollToElement() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#video").offset().top
  }, 500);
}

function showVideoAndPaintLink(elem) {
  elem.classList.add('active_video');
  document.getElementById(elem.classList[0]).classList.remove('d-none');
}

function addAllVideoMassDNone(){

  for (var i = 0; i < videoLinkMass.length; i++) {
    videoLinkMass[i].classList.remove('active_video');
  }

  for (var i = 0; i < videoMass.length; i++) {
    videoMass[i].classList.add('d-none');
  }
}

var hide_line = document.querySelector('.hide_line');


hide_line.onclick = function() {
  document.querySelector('.info_wrapper').classList.toggle('show_info');
}

$('.shop_carousel').owlCarousel({
      loop: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 700,
      navText: ['<img src="../img/main_carousel_left_red.png" alt="altimg">','<img src="../img/main_carousel_right_red.png" alt="altimg">'],
      responsiveClass: true,
      dots: false,
     responsive: {
      0: {
         items: 1
      },      
      680: {
         items: 2
      },
      800: {
         items: 3
      },
      1300: {
         items: 4
      },
      1600: {
         items: 5
      },
   }
});

///////popups

//magazine popup
var magazine_popup = document.querySelector('.magazine_popup');
var open_magazine_popup = document.getElementsByClassName('open_magazine_popup');
var magazine_popup_form = document.querySelector('.magazine_popup_form');
var magazine_inner_wrapper = document.querySelector('.magazine_inner_wrapper');
var magazine_popup_close_button = document.getElementById('magazine_popup_close_button');
var magazine_popup_alert_done = document.querySelector('.magazine_popup_alert_done');
var magazine_popup_button = document.querySelector('.magazine_popup_button');


for (var i = 0; i < open_magazine_popup.length; i++) {
  open_magazine_popup[i].addEventListener('click', function() {
    set_hidden_inputs(this);
    magazine_popup.classList.remove('d-none');
  });
}

magazine_popup_close_button.onclick=function() {
  close_magazine_popup();
}

function set_hidden_inputs(elem) {
  document.querySelector('.result_chise').innerText = elem.querySelector('.shop_carousel_item_title').innerText;
  document.querySelector('.result_price').innerText = elem.querySelector('.shop_price').innerText;
  document.getElementById('magazine_popup_product').value = elem.querySelector('.shop_carousel_item_title').innerText;
  document.getElementById('magazine_popup_price').value = elem.querySelector('.shop_price').innerText;
}

function close_magazine_popup() {
  magazine_popup.classList.add('d-none');
  magazine_popup_alert_done.classList.add('d-none');
  magazine_inner_wrapper.classList.remove('d-none');
}

jQuery(function($){
   $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let block = $(".magazine_popup_wrapper"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            close_magazine_popup()
        }
    });
});

$(document).ready(function() {
   $(".magazine_popup_form").submit(function() {
      $.ajax({
        type: "POST",
        url: "magazine_mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input, textarea").val("");
        $(".magazine_popup_form").trigger("reset");
        magazine_inner_wrapper.classList.add('d-none');
        magazine_popup_alert_done.classList.remove('d-none');
      }).fail(function() {
        alert('Отсутствует соединение с сервером');
      });
      return false;
   });
});


//subscribe popup

var subscribe = document.querySelector('.subscribe');
var subscribe_popup = document.querySelector('.subscribe_popup');
var subscribe_popup_close_button = document.querySelector('.subscribe_popup_close_button');
var subscribe_popup_alert_done = document.querySelector('.subscribe_popup_alert_done');
var subscribe_popup_inner_wrapper = document.querySelector('.subscribe_popup_inner_wrapper');

subscribe.onclick = function() {
  subscribe_popup.classList.remove('d-none');
}

subscribe_popup_close_button.onclick = function() {
  close_subscribe_popup ();
}

function close_subscribe_popup () {
  subscribe_popup.classList.add('d-none');
  subscribe_popup_inner_wrapper.classList.remove('d-none');
  subscribe_popup_alert_done.classList.add('d-none');
}

jQuery(function($){
   $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let block = $(".subscribe_popup_wrapper"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            close_subscribe_popup();
        }
    });
});

$(document).ready(function() {
   $(".subscribe_popup_form").submit(function() {
      $.ajax({
        type: "POST",
        url: "subscribe_mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input, textarea").val("");
        $(".subscribe_popup_form").trigger("reset");
        subscribe_popup_inner_wrapper.classList.add('d-none');
        subscribe_popup_alert_done.classList.remove('d-none');
      }).fail(function() {
        alert('Отсутствует соединение с сервером');
      });
      return false;
   });
});

///main mail in footer
var form_wrapper_alert_done = document.querySelector('.form_wrapper_alert_done');
var form_wrapper = document.querySelector('.form_wrapper');

$(document).ready(function() {
   $(".form_wrapper").submit(function() {
      $.ajax({
        type: "POST",
        url: "main_mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input, textarea").val("");
        $(".form_wrapper").trigger("reset");
        form_wrapper.classList.add('d-none');
        form_wrapper_alert_done.classList.remove('d-none');
      }).fail(function() {
        alert('Отсутствует соединение с сервером');
      });
      return false;
   });
});

////img height
window.onload = function() {
  setMaxHeightByWrapper ("news_wrapper_img", "news_inner_img");
  setMaxHeightByWrapper ("main_news_wrapper_img", "main_news_inner_img");
  setMaxHeightByWrapper ("about_img_wrapper", "about_wrapper_img");
  setMaxHeightByWrapper ("cover_item", "cover_img");
  setMaxHeightByWrapper ("main_cover", "main_cover_img");
  setMaxHeightByWrapper ("insta_img_wrapper", "instagram_img");
  setMaxHeightByWrapper ("shop_carousel_item_img_wrapper", "shop_carousel_item_img");

  addTitleAudio ();

  setMaxHeightAllBlocks("shop_carousel_item_description");
  setMaxHeightAllBlocks("shop_carousel_item_title");
};