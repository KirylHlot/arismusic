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

///////popups

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


//////audio
audiojs.events.ready(function() {
  var as = audiojs.createAll();
});

function addTitleAudio () {
  let scrubberMass = document.getElementsByClassName('scrubber');

  for (var i = 0; i < scrubberMass.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className  = "track_title";
    newDiv.innerHTML = scrubberMass[i].parentNode.parentNode.dataset.trackname + " - " + scrubberMass[i].parentNode.parentNode.dataset.tracauthor;
    scrubberMass[i].parentNode.insertBefore(newDiv, scrubberMass[i]);

    let buttonDownload = document.createElement("div");
    buttonDownload.className  = "button_download";
    buttonDownload.innerHTML = "<a href=\"" + scrubberMass[i].parentNode.getElementsByTagName('audio')[0].src +  "\" download><img src=\"img/down_icon.png\"><span>Download</span></a>";
    scrubberMass[i].parentNode.insertBefore(buttonDownload, scrubberMass[i].parentNode.querySelector('.error-message'));
  }
}


////archives
window.onload = function() {
  setMaxHeightByWrapper ("img_wrapper", "img_wrapper_img");
  setMaxHeightByWrapper ("audio_item_img_wrapper", "audio_item_img");
  setMaxHeightByWrapper ("detail_right_column_img_wrapper", "detail_right_column_img");

  setMaxHeightAllBlocks("h2_title");
  setMaxHeightAllBlocks("h2_wrapper");
  setMaxHeightAllBlocks("audio_item_h2");
  setMaxHeightAllBlocks("h2_desc");

  addTitleAudio ();

};

////scroll menu

$(document).ready(function() {
  $("a.scroll").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 500,
        easing: "swing"
      });
      return false;
    });
});