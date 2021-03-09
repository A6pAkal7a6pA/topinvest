
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 1000);
}

$(document).ready(function () {
  $('.header-menu #navig li a').click(function (e) {
    // var location = window.location.href;
    // e.preventDefault();
    // var link = this.href;
    // if (location == link) {
    //   if ($('body').hasClass('fancybox-active')) {

    //   }
    // if (!$('.header-menu #navig li a').hasClass('active')) {
    //   if ($(window).width() <= 800) {
    //     $('html').css('overflow', 'hidden');
    //   }
    // }
    $('.header-menu #navig li a').removeClass('active');
    $(this).addClass('active');
    // }
  });

  // Lazy
  $(".lazy").lazy();

  // Styles Select
  $("select").niceSelect();

  // Stretchy
  $(".form-stretchy .form-field-foo input").addClass("foo");

  // ScrollBar
  $(".nano").nanoScroller();

  // ScrollBar Textarea
  function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(" ");
    for (var i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
  if (document.querySelector("#section1 .form-message_content")) {
    var nanoTextarea = document.querySelector(
      "#section1 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea, "keyup cut paste", function () {
      $("#section1 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section2 .form-message_content")) {
    var nanoTextarea1 = document.querySelector(
      "#section2 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea1, "keyup cut paste", function () {
      $("#section2 .form-message_content").nanoScroller();
    });
  }
  if (
    document.querySelector("#section3 .template3-form1 .form-message_content")
  ) {
    var nanoTextarea2_1 = document.querySelector(
      "#section3 .template3-form1 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea2_1, "keyup cut paste", function () {
      $("#section3 .template3-form1 .form-message_content").nanoScroller();
    });
  }
  if (
    document.querySelector("#section3 .template3-form2 .form-message_content")
  ) {
    var nanoTextarea2_2 = document.querySelector(
      "#section3 .template3-form2 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea2_2, "keyup cut paste", function () {
      $("#section3 .template3-form2 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section4 .form-message_content")) {
    var nanoTextarea3 = document.querySelector(
      "#section4 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea3, "keyup cut paste", function () {
      $("#section4 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section5 .form-message_content")) {
    var nanoTextarea4 = document.querySelector(
      "#section5 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea4, "keyup cut paste", function () {
      $("#section5 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section6 .form-message_content")) {
    var nanoTextarea5 = document.querySelector(
      "#section6 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea5, "keyup cut paste", function () {
      $("#section6 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section7 .form-message_content")) {
    var nanoTextarea6 = document.querySelector(
      "#section7 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea6, "keyup cut paste", function () {
      $("#section7 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section8 .form-message_content")) {
    var nanoTextarea7 = document.querySelector(
      "#section8 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea7, "keyup cut paste", function () {
      $("#section8 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section9 .form-message_content")) {
    var nanoTextarea8 = document.querySelector(
      "#section9 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea8, "keyup cut paste", function () {
      $("#section9 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section10 .form-message_content")) {
    var nanoTextarea9 = document.querySelector(
      "#section10 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea9, "keyup cut paste", function () {
      $("#section10 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section11 .form-message_content")) {
    var nanoTextarea10 = document.querySelector(
      "#section11 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea10, "keyup cut paste", function () {
      $("#section11 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section12 .form-message_content")) {
    var nanoTextarea11 = document.querySelector(
      "#section12 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea11, "keyup cut paste", function () {
      $("#section12 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section13 .form-message_content")) {
    var nanoTextarea12 = document.querySelector(
      "#section13 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea12, "keyup cut paste", function () {
      $("#section13 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector("#section14 .form-message_content")) {
    var nanoTextarea12 = document.querySelector(
      "#section14 .form-message_content .nano-content"
    );
    addListenerMulti(nanoTextarea12, "keyup cut paste", function () {
      $("#section14 .form-message_content").nanoScroller();
    });
  }
  if (document.querySelector(".popup-request .form-message_content")) {
    var nanoTextarea14 = document.querySelector(
      ".popup-request .form-message_content textarea"
    );
    addListenerMulti(nanoTextarea14, "keyup cut paste", function () {
      $(".popup-request .form-message_content").nanoScroller();
    });
  }

  // Информация для Popap Services из главного меню
  var clicks = 0;
  $(".header-menu ul li a").on("click", function () {
    if ($(window).width() <= 800) {
      $('html').css('overflow', 'hidden');
    }
    $(
      ".popup-request .fancybox-close-small, .popup-privacyPolicy .fancybox-close-small"
    ).trigger("click");
    if (clicks <= 0) {
      $.fancybox.open({
        src: "#popup-services",
        type: "inline",
        btnTpl: {
          smallBtn:
            '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
        },
        touch: false,
        beforeLoad: function () {
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(false);
          }
          $("body").addClass("popup-services-wr popup-wr popup-wr-hidden");
          $("body").removeClass("main-menu_open");
        },
        afterLoad: function () {
          setTimeout(function () {
            $(".popup-services .nano").nanoScroller();
          }, 1);
        },
        beforeClose: function () {
          $("body").removeClass("popup-wr popup-services-wr popup-wr-hidden");
          if ($(window).width() <= 800) {
            $('html').css('overflow-y', 'scroll');
          }

        },
        afterClose: function () {
          $(".popup-services_content").empty();
 
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(true);
          }
          clicks = 0;
        },
      });
    } else {
      $(
        ".popup-services .popup-services_info1, .popup-services .popup-services_info2"
      ).remove();
    }
    ++clicks;
  });
  $(".header-menu_item1").click(function () {
    $(".services-type3")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".header-menu_item2").click(function () {
    $(".services-type11")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".header-menu_item3").click(function () {
    $(".services-type7")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".header-menu_item4").click(function () {
    $(".services-type10")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".header-menu_item5").click(function () {
    $(".services-type4")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });

  // Информация для Popap Services из внутренного меню
  $(".main-menu1 ul li a").click(function (e) {
    if ($(window).width() <= 800) {
      $('html').css('overflow', 'hidden');
    }
    e.preventDefault();
    if (clicks <= 0) {
      $.fancybox.open({
        src: "#popup-services",
        type: "inline",
        btnTpl: {
          smallBtn:
            '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
        },
        touch: false,
        beforeLoad: function () {
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(false);
          }
          $("body").addClass("popup-services-wr popup-wr popup-wr-hidden");
          $("body").removeClass("main-menu_open");
        },
        afterLoad: function () {
          setTimeout(function () {
            $(".popup-services .nano").nanoScroller();
          }, 1);
        },
        beforeClose: function () {
          if ($(window).width() <= 800) {
            $('html').css('overflow-y', 'scroll');
          }
          $("body").removeClass("popup-wr popup-services-wr popup-wr-hidden");
        },
        afterClose: function () {
          $(".popup-services_content").empty();
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(true);
          }
          clicks = 0;
        },
      });
    } else {
      $(
        ".popup-services .popup-services_info1, .popup-services .popup-services_info2"
      ).remove();
    }
    ++clicks;
  });
  $(".main-menu1_item1").click(function () {
    $(".services-type9")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item2").click(function () {
    $(".services-type11")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item3").click(function () {
    $(".services-type8")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item4").click(function () {
    $(".services-type7")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item5").click(function () {
    $(".services-type1")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item6").click(function () {
    $(".services-type10")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item7").click(function () {
    $(".services-type2")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item8").click(function () {
    $(".services-type3")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item9").click(function () {
    $(".services-type5")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item10").click(function () {
    $(".services-type4")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item11").click(function () {
    $(".services-type12")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });
  $(".main-menu1_item12").click(function () {
    $(".services-type6")
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });

  // Menu


  $(".header-sandwich").click(function () {
    if ($("body").hasClass("main-menu_open")) {
      $("body").removeClass("main-menu_open");
      if ($(window).width() <= 800) {
        $('html').css('overflow-y', "scroll");
      }
      if (document.querySelector(".fullpage-wrapper")) {
        $.fn.fullpage.setAllowScrolling(true);
      }
    } else {
      $(".slides-nav-menu").removeClass("active");
      $('html').css('overflow', "hidden");
      $("body").addClass("main-menu_open");
      if (document.querySelector(".fullpage-wrapper")) {
        $.fn.fullpage.setAllowScrolling(false);
      }
      $.fancybox.close();
    }
  });
  $(".main-menu_close").click(function () {
    if ($(window).width() <= 800) {
      $('html').css('overflow-y', "scroll");
    }
    $("body").removeClass("main-menu_open");
    if (document.querySelector(".fullpage-wrapper")) {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
  $(".header-phone_numb").click(function () {
    $.fancybox.close();
    $("body").removeClass("main-menu_open");
    if (document.querySelector(".fullpage-wrapper")) {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
  // document.getElementById('popup-privacyPolicy').get.addEventListener('click', function() {
  //   console.log('click');
  //   $('html').css('overflow-y', "scroll");
  // })


  // Masked Input
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  $("[name=phone]").mask("+9 (999) 999-9999");

  $(".phone-input").keydown(function (e) {
    thisInput = this;
    console.log(thisInput.value);
    console.log(e.target.selectionStart)
    if (thisInput.value == "" || thisInput.value == "+_ (___) ___-____" || e.target.selectionStart == 0) {
      thisInput.value = "+_ (___) ___-____";
      $(this).get(0).setSelectionRange(1, 1);
    }
    if (e.target.selectionStart == 1) {
      if (e.key == "7" || e.key == "8") {
        $("[name=phone]").mask("+9 (999) 999-9999");
      } else {
        $("[name=phone]").mask("+7 (999) 999-9999");
      }
    }
  });

  // $(".phone-input").click(function() {
  //   $(this).get(0).setSelectionRange(0, 0);
  // });

  // function withoutDigits(str) {
  //   str = str.toString;
  //   if (str.value.match(/[^0-9]/g)) {
  //     str.value = str.value.replace(/[^0-9]/g, "");
  //   };
  // }



  $("input[name=name]").keyup(function (e) {
    var raw_text = jQuery(this).val();
    console.log(raw_text);
    var return_text = raw_text.replace(/[0-9]/g, '');
    jQuery(this).val(return_text);

    // thisVal = e.target.value;
    // tmp = withoutDigits(thisVal);

    // // $("[name=name]").val() = withoutDigits(thisVal);
    // console.log(tmp);
  });


  $(".phone-input").keyup(function (e) {

    if (e.target.value[1] === "8") {
      const strArr = e.target.value.split("")
      strArr[1] = "7"
      e.target.value = strArr.join("")

      e.target.dispatchEvent(new Event("input"))
    }
  });

  $(".phone-input").blur(function () {
    $("[name=phone]").mask("+9 (999) 999-9999");
  });

  // Calculation slider
  $(".template4-calc_row").each(function () {
    var calc = $(this).find(".template4-ui-slider");
    $(this).find(".template4-ui-slider").html(calc.data("value"));
    $(this)
      .find(".template4-calc_slider")
      .slider({
        range: "min",
        min: calc.data("min"),
        max: calc.data("max"),
        value: calc.data("value"),
        step: calc.data("step"),
        slide: function (event, ui) {
          $(this).next().find(".template4-ui-slider").html(ui.value);
          $(this)
            .next()
            .find(".template4-ui-slider-amount-result")
            .val(ui.value.toLocaleString());
          $(this)
            .next()
            .find(".template4-ui-slider-rate-result")
            .val(ui.value.toLocaleString() + "%");
          let godOrLet = "лет";
          if (
            ui.value.toLocaleString()[ui.value.toLocaleString().length - 2] == 1
          ) {
            godOrLet = "лет";
          } else {
            if (
              ui.value.toLocaleString()[ui.value.toLocaleString().length - 1] >
              1 &&
              ui.value.toLocaleString()[ui.value.toLocaleString().length - 1] <=
              4
            ) {
              godOrLet = "года";
            } else if (
              ui.value.toLocaleString()[ui.value.toLocaleString().length - 1] ==
              1
            ) {
              godOrLet = "год";
            } else {
              godOrLet = "лет";
            }
          }
          $(this)
            .next()
            .find(".template4-ui-slider-term-result")
            .val(ui.value.toLocaleString() + " " + godOrLet);
          changeData();
        },
      });
  });

  var amountResult = $(".template4-ui-slider-amount")
    .data("value")
    .toLocaleString();
  $(".template4-ui-slider-amount-result").html(amountResult);

  var rateResult = $(".template4-ui-slider-rate")
    .data("value")
    .toLocaleString();
  $(".template4-ui-slider-rate-result").html(rateResult);

  var termResult = $(".template4-ui-slider-term")
    .data("value")
    .toLocaleString();
  $(".template4-ui-slider-term-result").html(termResult);

  $(".template4-ui-slider, .template4-calc_select select").on(
    "change keyup",
    function () {
      changeData();
    }
  );
  $(".template4-ui-slider, .template4-calc_select select").each(function () {
    changeData();
  });
  function changeData() {
    var tmp = document.getElementById("template4-ui-slider-amount-result").value;
    var calcAmount = $(".template4-ui-slider-amount").text();
    var calcRate = $(".template4-ui-slider-rate").text();
    var calcTerm = $(".template4-ui-slider-term").text();
    var calcPayment = $(".template4-calc_select option:selected").val();
    var year = $(".template4-ui-slider-term").text();
    var k = calcRate / 12 / 100;
    var k2 = 1 + k;
    var k3 = -calcTerm * 12;
    var k4 = Math.pow(k2, k3);
    var k5 = 1 - k4;
    var k6 = k / k5;
    var payment1 = Math.trunc(calcAmount * k6);
    var payment1Result = payment1.toLocaleString();
    var payment2 = Math.trunc(calcAmount * k);
    var payment2Result = payment2.toLocaleString();



    if (calcPayment == "1") {
      $(".template4-calc_result-numb").text(payment1Result);
      document.getElementById("template4-ui-slider-amount-result-check").value = tmp;
    } else if (calcPayment == "2") {
      $(".template4-calc_result-numb").text(payment2Result);
      document.getElementById("template4-ui-slider-amount-result-check").value = tmp;
    }
    if ($(".template4-calc_result-numb").text().length < 8) {
      $(".template4-calc_result-numb_million").removeClass("active");
    }
    if ($(".template4-calc_result-numb").text().length > 7) {
      $(".template4-calc_result-numb_million").addClass("active");
    }
    if (
      year == 1 ||
      year == 21 ||
      year == 31 ||
      year == 41 ||
      year == 51 ||
      year == 61 ||
      year == 71 ||
      year == 81 ||
      year == 91
    ) {
      $(
        ".template4-calc_numb-wr .year2, .template4-calc_numb-wr .year3"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year1").addClass("active");
    } else if (
      (year >= 2 && year <= 4) ||
      (year >= 22 && year <= 24) ||
      (year >= 32 && year <= 34) ||
      (year >= 42 && year <= 44) ||
      (year >= 52 && year <= 54) ||
      (year >= 62 && year <= 64) ||
      (year >= 72 && year <= 74) ||
      (year >= 82 && year <= 84) ||
      (year >= 92 && year <= 94)
    ) {
      $(
        ".template4-calc_numb-wr .year1, .template4-calc_numb-wr .year3"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year2").addClass("active");
    } else if ((year) => 5) {
      $(
        ".template4-calc_numb-wr .year1, .template4-calc_numb-wr .year2"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year3").addClass("active");
    }
  }

  // Переход в форме с одного поля на другой по нажатию на Enter
  var $inputs = $(".form").find("input, textarea, button");
  $inputs.keydown(function (e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if (key == 13) {
      if ($(this).hasClass("form-btn")) {
        return false;
      } else {
        e.preventDefault();
        var inputs = $(this).closest("form").find(":input:visible");
        inputs.eq(inputs.index(this) + 1).focus();
      }
    }
  });
  $(".field-area input, .field-amount input").on("input", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[A-Za-zА-Яа-яЁё]/, "")
    );
  });
  $(".field-name input, .field-city input").on("input", function () {
    $(this).val($(this).val().replace(/[0-9]/, ""));
  });
  $(".field-amount input").on("input", function () {
    $(this).val(
      String(
        $(this)
          .val()
          .replace(/[^0-9.]/g, "")
      ).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    );
  });

  $(".header-logo").click(function (e) {
    $.fancybox.close();
    $("body").removeClass("main-menu_open");
    e.preventDefault();
    fullpage_api.moveTo(1);
  });

  // Информация для Popap Services
  $(".services-list1_link, .services-list2_link").click(function (e) {
    if ($(window).width() <= 800) {
      $('html').css('overflow', 'hidden');
    }
    e.preventDefault();
    if (clicks <= 0) {
      $.fancybox.open({
        src: "#popup-services",
        type: "inline",
        btnTpl: {
          smallBtn:
            '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
        },
        touch: false,
        beforeLoad: function () {
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(false);
          }
          $("body").addClass("popup-services-wr popup-wr popup-wr-hidden");
          $("body").removeClass("main-menu_open");
        },
        afterLoad: function () {
          setTimeout(function () {
            $(".popup-services .nano").nanoScroller();
          }, 1);
        },
        beforeClose: function () {
          if ($(window).width() <= 800) {
            $('html').css('overflow-y', 'scroll');
          }
          $("body").removeClass("popup-wr popup-services-wr popup-wr-hidden");
        },
        afterClose: function () {
          $(".popup-services_content").empty();
          if (document.querySelector(".fullpage-wrapper")) {
            $.fn.fullpage.setAllowScrolling(true);
          }
          clicks = 0;
        },
      });
    } else {
      $(
        ".popup-services .popup-services_info1, .popup-services .popup-services_info2"
      ).remove();
    }
    ++clicks;
    $(this)
      .prev()
      .find(".popup-services_info1, .popup-services_info2")
      .clone()
      .appendTo(".popup-services_content");
  });

  // Изменение шапки и переключателей прокрутки при видимости экрана с Контактами
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(".screen-contacts").offset().top - 85)
      $("html").addClass("fp-viewing-contacts-wr");
    else $("html").removeClass("fp-viewing-contacts-wr");
  });

  $('[data-src="#popup-request"]').fancybox({

    touch: false,
    beforeLoad: function () {
      if ($(window).width() <= 800) {
        $('html').css('overflow', 'hidden');
      }
      if (document.querySelector(".fullpage-wrapper")) {
        $.fn.fullpage.setAllowScrolling(false);
      }
      $('.header-menu #navig li a').removeClass('active');
      $("body").addClass("popup-request-wr popup-wr popup-wr-hidden");
      $("body").removeClass("main-menu_open");
      $(".fancybox-stage").addClass("nano");
      $(".fancybox-slide").addClass("nano-content");
    },
    afterLoad: function () {
      setTimeout(function () {
        $(".popup-request-wr .nano").nanoScroller();
      }, 1);
    },
    beforeClose: function () {
      if ($(window).width() <= 800) {
        $('html').css('overflow-y', 'scroll');
      }
      $("body").removeClass("popup-wr popup-wr-hidden");
      $(".fancybox-stage").removeClass("nano");
      $(".fancybox-slide").removeClass("nano-content");
    },
    afterClose: function () {
      if (document.querySelector(".fullpage-wrapper")) {
        $.fn.fullpage.setAllowScrolling(true);
      }
    },
  });
  $(".main-menu2 ul li a").click(function () {
    $("body").removeClass("main-menu_open");
    if (document.querySelector(".fullpage-wrapper")) {
      $.fn.fullpage.setAllowScrolling(true);
    }
  });
  $("#fullpage").fullpage({
    anchors: [
      "template1",
      "template2",
      "template3",
      "template4",
      "template5",
      "template6",
      "template7",
      "template8",
      "template9",
      "template10",
      "services",
      "advantages",
      "investor",
      "contacts",
    ],
    normalScrollElements:
      ".popup-services_content, .popup-services_info2-desc, .popup-privacyPolicy_content, .main-menu1, .main-menu2, .textarea-noscroll, .slides-nav-menu",
    responsiveWidth: 800,
    scrollingSpeed: 1000,
    scrollHorizontally: false,
    navigation: true,
    menu: "#myMenu",
    bigSectionsDestination: top,
    lazyLoading: false,
    afterResponsive: function (isResponsive) {
      autoScrolling: false;
    },
    afterLoad: function (origin, destination, direction) {
      if (origin.anchor == "template1") {
        $("#section1 .animated").addClass("fadeInUp");
      }
    },
    onLeave: function (origin, destination, direction) {
      if (destination.anchor == "template2") {
        $("#section2 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template3") {
        $("#section3 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template4") {
        $("#section4 .animated").addClass("fadeInUp");
        setTimeout(function () {
          $("#section4 .template4-calc").addClass("fadeInUpFilter");
        }, 2000);
      }
      if (destination.anchor == "template5") {
        $("#section5 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template6") {
        $("#section6 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template7") {
        $("#section7 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template8") {
        $("#section8 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template9") {
        $("#section9 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "template10") {
        $("#section10 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "services") {
        $("#section11 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "advantages") {
        $("#section12 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "investor") {
        $("#section13 .animated").addClass("fadeInUp");
      }
      if (destination.anchor == "contacts") {
        $("html").addClass("fp-viewing-contacts-wr");
        $("#section13 .animated").addClass("fadeInUp");
      }
      if (origin.anchor == "contacts") {
        $("html").removeClass("fp-viewing-contacts-wr");
      }
    },
  });
});



function functionsResize() {
  if ($(window).width() >= 800) {
    $(".section").removeClass("fp-auto-height");
    $(".header-phone_link").click(function () {
      $.fancybox.close();
      $("body").removeClass("main-menu_open");
      setTimeout(function () {
        $(".template5-form .field-name input").focus();
      }, 1000);
    });
  } else {
    $(".section").addClass("fp-auto-height");
    $(".header-phone_link").click(function () {
      $.fancybox.close();
      $("body").removeClass("main-menu_open");
      $("html, body").animate(
        {
          scrollTop: $(".screen-template5").offset().top - 50,
        },
        1000
      );
      setTimeout(function () {
        $(".template5-form .field-name input").focus();
      }, 1000);
    });
  }
}
window.addEventListener("load", function () {
  functionsResize();
});
window.addEventListener("resize", function () {
  functionsResize();
});

function fancyboxResize() {
  if ($(window).width() >= 800) {
    $("[data-fancybox]").fancybox({
      btnTpl: {
        smallBtn:
          '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
      },
      closeExisting: true,
      touch: false,
      beforeLoad: function () {
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(false);
        }
        $("body").addClass("popup-wr popup-wr-hidden");
        $("body").removeClass("main-menu_open");
      },
      afterLoad: function () {
        setTimeout(function () {
          $(".popup .nano").nanoScroller();
        }, 1);
      },
      beforeClose: function () {
        $("body").removeClass("popup-wr popup-wr-hidden");
      },
      afterClose: function () {
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(true);
        }
      },
    });
    $('[data-src="#popup-privacyPolicy"]').fancybox({
      // $('html').css('overflow', 'hidden');
      btnTpl: {
        smallBtn:
          '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
      },
      closeExisting: true,
      touch: false,
      beforeLoad: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow', 'hidden');
        }
        $("body").addClass("popup-privacyPolicy-wr popup-wr popup-wr-hidden");
        $("body").removeClass("main-menu_open");
        $('html').css('overflow', 'hidden')
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(false);
        }
      },
      afterLoad: function () {
        setTimeout(function () {
          $(".popup-privacyPolicy .nano").nanoScroller();
        }, 1);
      },
      beforeClose: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow-y', 'scroll');
        }
        $("body").removeClass(
          "popup-wr popup-privacyPolicy-wr popup-wr-hidden"
        );
      },
      afterClose: function () {
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(true);
        }
      },
    });
    $('[data-src="#popup-services"]').fancybox({
      btnTpl: {
        smallBtn:
          '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
      },
      closeExisting: true,
      touch: false,
      beforeLoad: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow', 'hidden');
        }
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(false);
        }
        $("body").addClass("popup-services-wr popup-wr popup-wr-hidden");
        $("body").removeClass("main-menu_open");
      },
      afterLoad: function () {
        setTimeout(function () {
          $(".popup-services .nano").nanoScroller();
        }, 1);
      },
      beforeClose: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow-y', 'scroll');
        }
        $("body").removeClass("popup-wr popup-services-wr popup-wr-hidden");
      },
      afterClose: function () {
        $(".popup-services_content").empty();
        if (document.querySelector(".fullpage-wrapper")) {
          $.fn.fullpage.setAllowScrolling(true);
        }
      },
    });
  } else {
    $('[data-src="#popup-privacyPolicy"]').fancybox({
      btnTpl: {
        smallBtn:
          '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
      },
      touch: false,
      closeExisting: true,
      backFocus: false,
      beforeLoad: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow', 'hidden');
        }
        $("body").addClass("popup-privacyPolicy-wr popup-wr popup-wr-hidden");
        $("body").removeClass("main-menu_open");
      },
      afterLoad: function () {
        setTimeout(function () {
          $(".popup-privacyPolicy .nano").nanoScroller();
        }, 1);
      },
      beforeClose: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow-y', 'scroll');
        }
        $("body").removeClass(
          "popup-wr popup-privacyPolicy-wr popup-wr-hidden"
        );
      },
    });
    $('[data-src="#popup-services"]').fancybox({
      btnTpl: {
        smallBtn:
          '<button data-fancybox-close="" class="fancybox-close-small" title="Close"><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.21436 31.5759L33.1137 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.1136 31.5759L1.21474 1.21094" stroke="#999999" stroke-width="1.26039" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
      },
      touch: false,
      closeExisting: true,
      backFocus: false,
      beforeLoad: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow', 'hidden');
        }
        $("body").addClass("popup-services-wr popup-wr popup-wr-hidden");
        $("body").removeClass("main-menu_open");
      },
      afterLoad: function () {
        setTimeout(function () {
          $(".popup-services .nano").nanoScroller();
        }, 1);
      },
      beforeClose: function () {
        if ($(window).width() <= 800) {
          $('html').css('overflow-y', 'scroll');
        }
        $("body").removeClass("popup-wr popup-services-wr popup-wr-hidden");
      },
      afterClose: function () {
        $(".popup-services_content").empty();
      },
    });
  }
}
window.addEventListener("load", function () {
  fancyboxResize();
});
window.addEventListener("resize", function () {
  fancyboxResize();
});

/*REVISIONS*/

$(document).ready(function () {
  $(".privacyLink").click(function () { });

  let sectionsCount = $("section").length + 1;
  let sectionNames = [
    "template1",
    "template2",
    "template3",
    "template4",
    "template5",
    "template6",
    "template7",
    "template8",
    "template9",
    "template10",
    "services",
    "advantages",
    "investor",
    "contacts",
  ];
  for (let i = 0; i < sectionsCount; i++) {
    $("#myMenu")
      .find("ul")
      .append(
        `<li data-menuanchor="${sectionNames[i]}"><a href="#${sectionNames[i]
        }">${$(`#section${i + 1}`).attr("data-name")}</a></li>`
      );
  }
  $("#myMenu").find("li:first-child").addClass("active");

  // $(".slides-nav-dots").click(function () {
  //   $(".slides-nav-dots").toggleClass("active");
  //   $(".slides-nav-menu").toggleClass("active");
  //   if ($(".slides-nav-menu").hasClass("active")) {
  //     // console.log("hasnt");
  //     // $(".slides-nav-dots").removeClass("active");
  //     // $(".slides-nav-menu").addClass("active");
  //     fullpage_api.setAllowScrolling(true);
  //   } else {
  //     // console.log("has");
  //     // $(".slides-nav-menu").removeClass("active");
  //     // $(".slides-nav-dots").addClass("active");
  //     fullpage_api.setAllowScrolling(false);
  //     $("body").removeClass("main-menu_open");


  //   }
  // });

  $(".slides-nav-dots").click(function () {
    if (!$(".slides-nav-menu").hasClass("active")) {
      $(".slides-nav-menu").addClass("active");
      $(".slides-nav-dots").removeClass("active");

      fullpage_api.setAllowScrolling(true);
      fullpage_api.setKeyboardScrolling(true);
    }
    // else {
    // $(".slides-nav-dots").removeClass("active");
    // $(".slides-nav-menu").addClass("active");

    // // fullpage_api.setAllowScrolling(true);
    // // fullpage_api.setKeyboardScrolling(true);
    // //setDotsStatus(true)
    // $("body").removeClass("main-menu_open");
    // }
    // callScrollBarLeft()

  });

  // function callScrollBarLeft() {
  //   var nanoTextarea = document.querySelector(".slides-nav-menu .nano-content");
  //   $(".nano-content").css("display", "block")
  //   addListenerMulti(nanoTextarea, "scroll", function () {
  //   });

  //   $("#myMenu").nanoScroller();
  // }





  $(".slides-nav-close").click(function () {
    $(".slides-nav-menu").removeClass("active");
    $(".slides-nav-dots").addClass("active");
    fullpage_api.setAllowScrolling(true);
  });

  $(".slides-nav-menu").mouseenter(function (e) {
    // $('.slides-nav-menu').css('overflow-y', 'scroll');
    // if ($(window).width() <= 800) {
    //   $("body").css('overflow', 'hidden');
    // } else {
    // $("body").css('overflow', 'hidden');
    // $("html").css('overflow', 'hidden');
    fullpage_api.setAllowScrolling(false);
    // }


  });

  $(".slides-nav-menu").mouseleave(function (e) {
    fullpage_api.setAllowScrolling(true);
    // $("body").css('overflow-y', 'scroll');
    // $("html").css('overflow', 'auto'); 
  });



  $(document).mouseup(function (e) {
    if ($(".slides-nav-menu").hasClass("active")) {
      var div = $(".slides-nav-menu");
      var dots = $(".slides-nav-dots");
      if (!div.is(e.target) && div.has(e.target).length === 0 && !dots.is(e.target) && dots.has(e.target).length === 0) {
        $(".slides-nav-menu").removeClass("active");
        $(".slides-nav-dots").addClass("active");
        // $("body").addClass("main-menu_open");
        fullpage_api.setAllowScrolling(true);
      }
    }
  });

  function doGetCaretPosition(oField) {
    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {
      // Set focus on the element
      oField.focus();

      // To get cursor position, get empty selection range
      var oSel = document.selection.createRange();

      // Move selection start to 0 position
      oSel.moveStart("character", -oField.value.length);

      // The caret position is selection length
      iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == "0")
      iCaretPos =
        oField.selectionDirection == "backward"
          ? oField.selectionStart
          : oField.selectionEnd;

    // Return results
    return iCaretPos;
  }

  $(".main-menu_inner.nano-content").css("outline", "none");

  function changeData2() {
    var calcAmount1 = document.getElementById("template4-ui-slider-amount-result").value;
    var calcAmount = noSpaceInNum(calcAmount1);
    console.log("calcAmount: " + calcAmount)
    var calcRate = $(".template4-ui-slider-rate").attr("data-value");
    console.log("calcRate: " + calcRate)
    var calcTerm = $(".template4-ui-slider-term").attr("data-value");
    var calcPayment = $(".template4-calc_select option:selected").val();
    var year = $(".template4-ui-slider-term").text();
    var k = calcRate / 12 / 100;
    var k2 = 1 + k;
    var k3 = -calcTerm * 12;
    var k4 = Math.pow(k2, k3);
    var k5 = 1 - k4;
    var k6 = k / k5;
    var payment1 = Math.trunc(calcAmount * k6);
    var payment1Result = payment1.toLocaleString();
    var payment2 = Math.trunc(calcAmount * k);
    var payment2Result = payment2.toLocaleString();
    if (calcPayment == "1") {
      $(".template4-calc_result-numb").text(payment1Result);
    } else if (calcPayment == "2") {
      $(".template4-calc_result-numb").text(payment2Result);
    }
    if ($(".template4-calc_result-numb").text().length < 8) {
      $(".template4-calc_result-numb_million").removeClass("active");
    }
    if ($(".template4-calc_result-numb").text().length > 7) {
      $(".template4-calc_result-numb_million").addClass("active");
    }
    if (
      year == 1 ||
      year == 21 ||
      year == 31 ||
      year == 41 ||
      year == 51 ||
      year == 61 ||
      year == 71 ||
      year == 81 ||
      year == 91
    ) {
      $(
        ".template4-calc_numb-wr .year2, .template4-calc_numb-wr .year3"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year1").addClass("active");
    } else if (
      (year >= 2 && year <= 4) ||
      (year >= 22 && year <= 24) ||
      (year >= 32 && year <= 34) ||
      (year >= 42 && year <= 44) ||
      (year >= 52 && year <= 54) ||
      (year >= 62 && year <= 64) ||
      (year >= 72 && year <= 74) ||
      (year >= 82 && year <= 84) ||
      (year >= 92 && year <= 94)
    ) {
      $(
        ".template4-calc_numb-wr .year1, .template4-calc_numb-wr .year3"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year2").addClass("active");
    } else if ((year) => 5) {
      $(
        ".template4-calc_numb-wr .year1, .template4-calc_numb-wr .year2"
      ).removeClass("active");
      $(".template4-calc_numb-wr .year3").addClass("active");
    }
  }

  function noSpaceInNum(str) {
    return str.replace(/\D+/g, "");
  }

  // function digitsInTheNumber(num) {

  //   let StringNum = String(num);
  //   let numLength = String(num).length;
  //   let firstNums = numLength % 3;
  //   let addNums = numLength - firstNums;
  //   let circleFor = addNums / 3;
  //   let firstNumChar = "";
  //   let arrowsNum = [];
  //   for (let i = 0; i < firstNums; i++) {
  //     firstNumChar += StringNum[i];
  //   }
  //   arrowsNum.push(firstNumChar);
  //   for (let i = 0; i < circleFor; i++) {
  //     arrowsNum.push(
  //       StringNum[firstNums + i * 3] +
  //       StringNum[firstNums + 1 + i * 3] +
  //       StringNum[firstNums + 2 + i * 3]
  //     );
  //   }
  //   return arrowsNum.join(" ");
  // }

  function digitsInTheNumber(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1 $2");
    return x;
  }

  document.getElementById(
    "template4-ui-slider-amount-result"
  ).onkeypress = function (event) {

    thisInput = this;
    if (
      event.key == 1 ||
      event.key == 2 ||
      event.key == 3 ||
      event.key == 4 ||
      event.key == 5 ||
      event.key == 6 ||
      event.key == 7 ||
      event.key == 8 ||
      event.key == 9 ||
      event.key == 0
    ) {
      setTimeout(function () {

        let inputVal = event.target.value;
        let count;
        let maxCount = document
          .querySelector(".template4-ui-slider-amount")
          .getAttribute("data-max");
        let minCount = document
          .querySelector(".template4-ui-slider-amount")
          .getAttribute("data-min");
        count = noSpaceInNum(inputVal);
        let percent = (count / maxCount) * 100;
        if (Number(noSpaceInNum(inputVal)) <= minCount) {
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = 0 + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = 0 + "%";
          thisInput.parentNode.classList.add("minCount");
          thisInput.parentNode.classList.remove("maxCount");
        } else if (Number(noSpaceInNum(inputVal)) >= maxCount) {
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = 100 + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = 100 + "%";
          thisInput.parentNode.classList.add("maxCount");
          thisInput.parentNode.classList.remove("minCount");
        } else {
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = percent + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = percent + "%";
          thisInput.parentNode.classList.remove("maxCount");
          thisInput.parentNode.classList.remove("minCount");
        }
        document
          .querySelector(".template4-ui-slider-amount")
          .setAttribute("data-value", count);
        let resultNum = document
          .querySelector(".template4-ui-slider-amount")
          .getAttribute("data-value");
        event.target.value = digitsInTheNumber(resultNum);
        document.querySelector(
          ".template4-ui-slider-amount"
        ).innerHTML = noSpaceInNum(event.target.value);
      }, 100);
    } else {
      return false;
    }
  };

  document.getElementById("template4-ui-slider-amount-result-check").addEventListener("input", function (e) {
    pr = document.getElementById("template4-ui-slider-amount-result-check").value;
    pr1 = noSpaceInNum(pr);
    if (pr1.length > 8) {
      // if (Number(pr1 >= 99999999)) {
      pr1 = pr1.substr(0, 8);
    } else if (Number(pr1 <= 0)) {
      pr1 = "";
    }
    var calcRate = $(".template4-ui-slider-rate").text();
    // console.log("calcRate" + calcRate)
    var calcTerm = $(".template4-ui-slider-term").text();
    var calcPayment = $(".template4-calc_select option:selected").val();
    var year = $(".template4-ui-slider-term").text();
    var k = calcRate / 12 / 100;
    var k2 = 1 + k;
    var k3 = -calcTerm * 12;
    var k4 = Math.pow(k2, k3);
    var k5 = 1 - k4;
    var k6 = k / k5;
    var payment1 = Math.trunc(pr1 * k6);
    var payment1Result = payment1.toLocaleString();
    $(".template4-calc_result-numb").text(payment1Result);
    tmp1 = digitsInTheNumber(pr1);
    tmp = noSpaceInNum(tmp1)
    let maxCount = document
      .querySelector(".check")
      .getAttribute("data-max");
    if (tmp.length > 8) {
      tmp = "99999999";
      tmp1 = "99999999";
    }
    document.getElementById("template4-ui-slider-amount-result").value;
    document.getElementById("template4-ui-slider-amount-result").value = tmp;
    document.getElementById("template4-ui-slider-amount-result-check").value = tmp1;
    document.getElementById("template4-ui-slider-amount-result").parentElement.querySelector("span").dataset.value = tmp;
    document.getElementById("template4-ui-slider-amount-result").dispatchEvent(new Event("blur", { bubbles: true }));
    document.getElementById("template4-ui-slider-amount-result").dispatchEvent(new KeyboardEvent("keypress", { key: 1 }));
  });

  document.getElementById(
    "template4-ui-slider-amount-result-check"
  ).onkeypress = function (event) {
    some = noSpaceInNum(document.getElementById("template4-ui-slider-amount-result-check").value);
    some1 = noSpaceInNum(document.getElementById("template4-ui-slider-amount-result").value);
    var calcRate = $(".template4-ui-slider-rate").text();
    var calcTerm = $(".template4-ui-slider-term").text();
    var calcPayment = $(".template4-calc_select option:selected").val();
    console.log("calcPayment" + calcPayment)
    var k = calcRate / 12 / 100;
    var k2 = 1 + k;
    var k3 = -calcTerm * 12;
    var k4 = Math.pow(k2, k3);
    var k5 = 1 - k4;
    var k6 = k / k5;
    var payment1 = Math.trunc(some1 * k6);
    var payment1Result = payment1.toLocaleString();
    var payment2 = Math.trunc(some1 * k);
    var payment2Result = payment2.toLocaleString();
    if (event.key == "Enter") {
      let rateValue = document.getElementById("template4-ui-slider-rate-result")
        .value;
      document.getElementById(
        "template4-ui-slider-rate-result"
      ).value = rateValue.replace("%", "");
      document.getElementById("template4-ui-slider-rate-result").focus();
      if (Number(some) <= 200000) {
        document.getElementById("template4-ui-slider-amount-result-check").value = "200 000";
        document.getElementById("template4-ui-slider-amount-result").value = "200000";
        changeData2();
        // if (calcPayment == "1") {
        //   $(".template4-calc_result-numb").text(payment1Result);
        // } else if (calcPayment == "2") {
        //   $(".template4-calc_result-numb").text(payment2Result);
        // }
      } else if (Number(some) >= 25000000) {
        document.getElementById("template4-ui-slider-amount-result-check").value = "25 000 000";
        document.getElementById("template4-ui-slider-amount-result").value = "25000000";
        changeData2();
        // if (calcPayment == "1") {
        //   $(".template4-calc_result-numb").text(payment1Result);
        // } else if (calcPayment == "2") {
        //   $(".template4-calc_result-numb").text(payment2Result);
        // }
      }
      return false;
    }

    thisInput = this;
    if (
      event.key == 1 ||
      event.key == 2 ||
      event.key == 3 ||
      event.key == 4 ||
      event.key == 5 ||
      event.key == 6 ||
      event.key == 7 ||
      event.key == 8 ||
      event.key == 9 ||
      event.key == 0
    ) {
      setTimeout(function () {

        let inputVal = event.target.value;

        let count;
        let maxCount = document
          .querySelector(".check")
          .getAttribute("data-max");
        let minCount = document
          .querySelector(".check")
          .getAttribute("data-min");
        console.log("minCount: " + minCount)
        count = noSpaceInNum(inputVal);
        let percent = (count / maxCount) * 100;
        if (Number(noSpaceInNum(tmp)) <= minCount) {
          document.getElementById("template4-ui-slider-amount-result-check").value = 200000;
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = 0 + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = 0 + "%";
          thisInput.parentNode.classList.add("minCount");
          thisInput.parentNode.classList.remove("maxCount");

        } else if (Number(noSpaceInNum(inputVal)) >= maxCount) {
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = 100 + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = 100 + "%";
          thisInput.parentNode.classList.add("maxCount");
          thisInput.parentNode.classList.remove("minCount");
        } else {
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-handle"
          ).style.left = percent + "%";
          thisInput.parentNode.parentNode.querySelector(
            ".ui-slider .ui-slider-range"
          ).style.width = percent + "%";
          thisInput.parentNode.classList.remove("maxCount");
          thisInput.parentNode.classList.remove("minCount");
        }
        document
          .querySelector(".template4-ui-slider-amount")
          .setAttribute("data-value", count);
        let resultNum = document
          .querySelector(".template4-ui-slider-amount")
          .getAttribute("data-value");
        event.target.value = digitsInTheNumber(resultNum);
        document.querySelector(
          ".template4-ui-slider-amount"
        ).innerHTML = noSpaceInNum(event.target.value);
      }, 100);
    } else {
      return false;
    }
  };

  // $('.template4-ui-slider-amount-result').on('input keyup', function(){
  // 	let inputVal = $(this).val();
  // 	let count;
  // 	let maxCount = $('.template4-ui-slider-amount').attr('data-max');
  // 	let minCount = $('.template4-ui-slider-amount').attr('data-min');
  // 	count = noSpaceInNum(inputVal);
  // 	let percent = (count / maxCount) * 100;
  // 	if (Number(noSpaceInNum(inputVal)) <= minCount) {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `0%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `0%`);
  // 		$(this).parents('.template4-calc_numb-wr').addClass('minCount');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('maxCount');
  // 	} else if (Number(noSpaceInNum(inputVal)) >= maxCount) {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `100%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `100%`);
  // 		$(this).parents('.template4-calc_numb-wr').addClass('maxCount');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('minCount');
  // 	} else {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `${percent}%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `${percent}%`);
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('maxCount');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('minCount');
  // 	}
  // 	$('.template4-ui-slider-amount').attr('data-value', count);
  // 	let resultNum = $('.template4-ui-slider-amount').attr('data-value');
  // 	$(this).val(digitsInTheNumber(resultNum));
  // 	$('.template4-ui-slider-amount').text(noSpaceInNum($(this).val()));
  // });

  document.getElementById("template4-ui-slider-amount-result-check").addEventListener("blur", function (event) {
    some = noSpaceInNum(document.getElementById("template4-ui-slider-amount-result-check").value);
    some1 = noSpaceInNum(document.getElementById("template4-ui-slider-amount-result").value);

    if (Number(some) <= 200000) {
      document.getElementById("template4-ui-slider-amount-result-check").value = "200 000";
      document.getElementById("template4-ui-slider-amount-result").value = "200000";
      changeData2();
      // if (calcPayment == "1") {
      //   $(".template4-calc_result-numb").text(payment1Result);
      // } else if (calcPayment == "2") {
      //   $(".template4-calc_result-numb").text(payment2Result);
      // }
    } else if (Number(some) >= 25000000) {
      document.getElementById("template4-ui-slider-amount-result-check").value = "25 000 000";
      document.getElementById("template4-ui-slider-amount-result").value = "25000000";
      changeData2();
    }
    // if (
    //   Number(noSpaceInNum($(this).val())) < $(".template4-ui-slider-amount").attr("data-min")
    // ) {
    //   $(this).val(
    //     digitsInTheNumber($(".template4-ui-slider-amount").attr("data-min"))
    //   );
    //   $(".template4-ui-slider-amount").attr(
    //     "data-value",
    //     noSpaceInNum($(this).val())
    //   );
    //   $(".template4-ui-slider-amount").text(noSpaceInNum($(this).val()));
    // }
    // if (
    //   Number(noSpaceInNum($(this).val())) >
    //   $(".template4-ui-slider-amount").attr("data-max")
    // ) {
    //   $(this).val(
    //     digitsInTheNumber($(".template4-ui-slider-amount").attr("data-max"))
    //   );
    //   $(".template4-ui-slider-amount").attr(
    //     "data-value",
    //     noSpaceInNum($(this).val())
    //   );
    //   $(".template4-ui-slider-amount").text(noSpaceInNum($(this).val()));
    // }
    // $(this).parents(".template4-calc_numb-wr").removeClass("maxCount");
    // $(this).parents(".template4-calc_numb-wr").removeClass("minCount");
    // changeData2();
  });
  document.getElementById("template4-ui-slider-amount-result-check").addEventListener("dblclick", function () {
    var p = document.getElementById("template4-ui-slider-amount-result-check");
    p.select();
  });

  // document.getElementById(
  //   "template4-ui-slider-amount-result"
  // ).onkeypress = function (event) {
  //   if (event.key == "Enter") {
  //     let rateValue = document.getElementById("template4-ui-slider-rate-result")
  //       .value;
  //     document.getElementById(
  //       "template4-ui-slider-rate-result"
  //     ).value = rateValue.replace("%", "");
  //     document.getElementById("template4-ui-slider-rate-result").focus();
  //     changeData2();
  //     return false;
  //   }

  //   thisInput = this;

  //   if (
  //     event.key == 1 ||
  //     event.key == 2 ||
  //     event.key == 3 ||
  //     event.key == 4 ||
  //     event.key == 5 ||
  //     event.key == 6 ||
  //     event.key == 7 ||
  //     event.key == 8 ||
  //     event.key == 9 ||
  //     event.key == 0
  //   ) {
  //     setTimeout(function () {
  //       let inputVal = event.target.value;
  //       let count;
  //       let maxCount = document
  //         .querySelector(".template4-ui-slider-amount")
  //         .getAttribute("data-max");
  //       let minCount = document
  //         .querySelector(".template4-ui-slider-amount")
  //         .getAttribute("data-min");
  //       count = noSpaceInNum(inputVal);
  //       let percent = (count / maxCount) * 100;
  //       if (Number(noSpaceInNum(inputVal)) <= minCount) {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = 0 + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = 0 + "%";
  //         thisInput.parentNode.classList.add("minCount");
  //         thisInput.parentNode.classList.remove("maxCount");
  //       } else if (Number(noSpaceInNum(inputVal)) >= maxCount) {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = 100 + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = 100 + "%";
  //         thisInput.parentNode.classList.add("maxCount");
  //         thisInput.parentNode.classList.remove("minCount");
  //       } else {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = percent + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = percent + "%";
  //         thisInput.parentNode.classList.remove("maxCount");
  //         thisInput.parentNode.classList.remove("minCount");
  //       }
  //       document
  //         .querySelector(".template4-ui-slider-amount")
  //         .setAttribute("data-value", count);
  //       let resultNum = document
  //         .querySelector(".template4-ui-slider-amount")
  //         .getAttribute("data-value");
  //       console.log(resultNum);
  //       event.target.value = digitsInTheNumber(resultNum);
  //       document.querySelector(
  //         ".template4-ui-slider-amount"
  //       ).innerHTML = noSpaceInNum(event.target.value);
  //     }, 100);
  //   } else {
  //     return false;
  //   }
  // };

  document.getElementById(
    "template4-ui-slider-rate-result"
  ).onkeypress = function (event) {

    if (event.key == "Enter") {
      let termValue = document.getElementById("template4-ui-slider-term-result")
        .value;
      console.log(termValue.indexOf("лет"));
      if (termValue.indexOf("лет") > -1) {
        termValue = termValue.replace(" лет", "");
      }
      if (termValue.indexOf("год") > -1) {
        termValue = termValue.replace(" год", "");
      }
      if (termValue.indexOf("года") > -1) {
        termValue = termValue.replace(" года", "");
      }
      document.getElementById(
        "template4-ui-slider-term-result"
      ).value = termValue;
      document.getElementById("template4-ui-slider-term-result").focus();
      changeData2();
      return false;
    }
    if (event.target.value.indexOf(",") > -1) {
      let inputArr = event.target.value.split(",");
      if (inputArr[1].length > 1) {
        return false;
      }
    }
    if (event.target.value.indexOf(".") > -1) {
      let inputArr = event.target.value.split(".");
      if (inputArr[1].length > 1) {
        return false;
      }
    }
    if (
      event.target.value.indexOf(",") > -1 &&
      (event.key == "," || event.key == ".")
    ) {
      return false;
    } else if (
      event.target.value.indexOf(".") > -1 &&
      (event.key == "," || event.key == ".")
    ) {
      return false;
    } else {
      thisInput = this;
      if (
        event.key == 1 ||
        event.key == 2 ||
        event.key == 3 ||
        event.key == 4 ||
        event.key == 5 ||
        event.key == 6 ||
        event.key == 7 ||
        event.key == 8 ||
        event.key == 9 ||
        event.key == 0 ||
        event.key == "," ||
        event.key == "."
      ) {
        setTimeout(function () {
          let inputVal;
          if (event.target.value.indexOf(",") > -1) {
            inputVal = event.target.value.replace(",", ".");
            inputVal = Number(inputVal.replace("%", ""));
          } else {
            inputVal = Number(event.target.value.replace("%", ""));
          }
          let maxCount = Number(
            document
              .querySelector(".template4-ui-slider-rate")
              .getAttribute("data-max")
          );
          let minCount = Number(
            document
              .querySelector(".template4-ui-slider-rate")
              .getAttribute("data-min")
          );
          let percent = ((inputVal - minCount) / (maxCount - minCount)) * 100;
          if (inputVal <= minCount) {
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-handle"
            ).style.left = 0 + "%";
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-range"
            ).style.width = 0 + "%";
            thisInput.parentNode.classList.add("minRate");
            thisInput.parentNode.classList.remove("maxRate");
          } else if (inputVal >= maxCount) {
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-handle"
            ).style.left = 100 + "%";
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-range"
            ).style.width = 100 + "%";
            thisInput.parentNode.classList.remove("minRate");
            thisInput.parentNode.classList.add("maxRate");
          } else {
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-handle"
            ).style.left = percent + "%";
            thisInput.parentNode.parentNode.querySelector(
              ".ui-slider .ui-slider-range"
            ).style.width = percent + "%";
            thisInput.parentNode.classList.remove("minRate");
            thisInput.parentNode.classList.remove("maxRate");
          }
          document
            .querySelector(".template4-ui-slider-rate")
            .setAttribute("data-value", inputVal);
        }, 100);
      } else {
        return false;
      }
    }
  };

  $('.template4-ui-slider-rate-result').on('input keyup', function () {
    let inputValue;
    if ($(this).val().indexOf(',') > -1) {
      if ($(this).val().indexOf(',', $(this).val().indexOf(',') + 1) > -1) {
        return false;
      }
      if ($(this).val().indexOf('.', $(this).val().indexOf(',') + 1) > -1) {
        return false;
      }
      inputValue = $(this).val().replace(',', '.');
    } else {
      inputValue = $(this).val();
    }

    let inputVal = Number(inputValue.replace('%', ''));
    let maxCount = Number($('.template4-ui-slider-rate').attr('data-max'));
    let minCount = Number($('.template4-ui-slider-rate').attr('data-min'));
    let percent = ((inputVal - minCount) / (maxCount - minCount)) * 100;
    if (inputVal <= minCount) {
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `0%`);
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `0%`);
      $(this).parents('.template4-calc_numb-wr').addClass('minRate');
      $(this).parents('.template4-calc_numb-wr').removeClass('maxRate');
    } else if (inputVal >= maxCount) {
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `100%`);
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `100%`);
      $(this).parents('.template4-calc_numb-wr').addClass('maxRate');
      $(this).parents('.template4-calc_numb-wr').removeClass('minRate');
    } else {
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `${percent}%`);
      $(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `${percent}%`);
      $(this).parents('.template4-calc_numb-wr').removeClass('maxCount');
      $(this).parents('.template4-calc_numb-wr').removeClass('minCount');
    }
    $('.template4-ui-slider-rate').attr('data-value', inputVal);
    let resultNum = $('.template4-ui-slider-rate').attr('data-value');
  });

  $(".template4-ui-slider-rate-result").on("mousedown", function () {
    $(this).val($(this).val().replace("%", ""));
  });

  $(".template4-ui-slider-rate-result").blur(function () {
    if ($(this).val()[$(this).val().length - 1] == ",") {
      $(this).val($(this).val().replace(",", ""));
    }
    $(this).val($(this).val().replace(",", "."));
    if (
      Number($(this).val()) < $(".template4-ui-slider-rate").attr("data-min")
    ) {
      $(this).val(
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-min")) + "%"
      );
      $(".template4-ui-slider-rate").attr(
        "data-value",
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-min"))
      );
      $(".template4-ui-slider-rate").text(
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-min"))
      );
    } else if (
      Number($(this).val()) > $(".template4-ui-slider-rate").attr("data-max")
    ) {
      $(this).val(
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-max")) + "%"
      );
      $(".template4-ui-slider-rate").attr(
        "data-value",
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-max"))
      );
      $(".template4-ui-slider-rate").text(
        digitsInTheNumber($(".template4-ui-slider-rate").attr("data-max"))
      );
    } else {
      $(this).val($(this).val().replace("%", "") + "%");
      $(".template4-ui-slider-rate").text($(this).val().replace("%", ""));
    }
    $(this).parents(".template4-calc_numb-wr").removeClass("maxRate");
    $(this).parents(".template4-calc_numb-wr").removeClass("minRate");
    // changeData2();
  });

  // document.getElementById(
  //   "template4-ui-slider-term-result"
  // ).onkeypress = function (event) {

  //   if (event.key == "Enter") {
  //     document.getElementById("template4-ui-slider-term-result").blur();
  //     changeData2();
  //     return false;
  //   }
  //   thisInput = this;
  //   if (
  //     event.key == 1 ||
  //     event.key == 2 ||
  //     event.key == 3 ||
  //     event.key == 4 ||
  //     event.key == 5 ||
  //     event.key == 6 ||
  //     event.key == 7 ||
  //     event.key == 8 ||
  //     event.key == 9 ||
  //     event.key == 0
  //   ) {
  //     setTimeout(function () {
  //       let inputVal = Number(event.target.value.replace("лет", ""));
  //       let maxCount = Number(
  //         document
  //           .querySelector(".template4-ui-slider-term")
  //           .getAttribute("data-max")
  //       );
  //       let minCount = Number(
  //         document
  //           .querySelector(".template4-ui-slider-term")
  //           .getAttribute("data-min")
  //       );
  //       let percent = ((inputVal - minCount) / (maxCount - minCount)) * 100;
  //       if (inputVal <= minCount) {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = 0 + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = 0 + "%";
  //         thisInput.parentNode.classList.add("minTemp");
  //         thisInput.parentNode.classList.remove("maxTemp");
  //       } else if (inputVal >= maxCount) {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = 100 + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = 100 + "%";
  //         thisInput.parentNode.classList.add("minTemp");
  //         thisInput.parentNode.classList.remove("maxTemp");
  //       } else {
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-handle"
  //         ).style.left = percent + "%";
  //         thisInput.parentNode.parentNode.querySelector(
  //           ".ui-slider .ui-slider-range"
  //         ).style.width = percent + "%";
  //         thisInput.parentNode.classList.remove("minTemp");
  //         thisInput.parentNode.classList.remove("maxTemp");
  //       }
  //       document
  //         .querySelector(".template4-ui-slider-term")
  //         .setAttribute("data-value", inputVal);
  //     }, 100);
  //   } else {
  //     return false;
  //   }
  // };

  // $('.template4-ui-slider-term-result').on('input keyup', function(){
  // 	let inputVal = Number($(this).val().replace('лет', ''));
  // 	let maxCount = Number($('.template4-ui-slider-term').attr('data-max'));
  // 	let minCount = Number($('.template4-ui-slider-term').attr('data-min'));
  // 	let percent = ((inputVal - minCount) / (maxCount - minCount)) * 100;
  // 	if (inputVal <= minCount) {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `0%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `0%`);
  // 		$(this).parents('.template4-calc_numb-wr').addClass('minTemp');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('maxTemp');
  // 	} else if(inputVal >= maxCount) {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `100%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `100%`);
  // 		$(this).parents('.template4-calc_numb-wr').addClass('maxTemp');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('minTemp');
  // 	} else {
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-handle').css('left', `${percent}%`);
  // 		$(this).parents('.template4-calc_row').find('.ui-slider').find('.ui-slider-range').css('width', `${percent}%`);
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('maxTemp');
  // 		$(this).parents('.template4-calc_numb-wr').removeClass('minTemp');
  // 	}
  // 	$('.template4-ui-slider-term').attr('data-value', inputVal);
  // 	let resultNum = $('.template4-ui-slider-term').attr('data-value');
  // 	$(this).val(resultNum);
  // });

  $(".template4-ui-slider-term-result").click(function () {
    $(this).val($(this).val().split(" ")[0]);
  });

  $(".template4-ui-slider-term-result").blur(function () {
    let godOrLet2 = "лет";
    if ($(this).val()[$(this).val().length - 2] == 1) {
      godOrLet2 = "лет";
    } else {
      if (
        $(this).val()[$(this).val().length - 1] > 1 &&
        $(this).val()[$(this).val().length - 1] <= 4
      ) {
        godOrLet2 = "года";
      } else if ($(this).val()[$(this).val().length - 1] == 1) {
        godOrLet2 = "год";
      } else {
        godOrLet2 = "лет";
      }
    }
    if (
      Number($(this).val()) < $(".template4-ui-slider-term").attr("data-min")
    ) {
      $(this).val(
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-min")) +
        " " +
        godOrLet2
      );
      $(".template4-ui-slider-term").attr(
        "data-value",
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-min"))
      );
      $(".template4-ui-slider-term").text(
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-min"))
      );
    } else if (
      Number($(this).val()) > $(".template4-ui-slider-term").attr("data-max")
    ) {
      godOrLet2 = "лет";
      $(this).val(
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-max")) +
        " " +
        godOrLet2
      );
      $(".template4-ui-slider-term").attr(
        "data-value",
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-max"))
      );
      $(".template4-ui-slider-term").text(
        digitsInTheNumber($(".template4-ui-slider-term").attr("data-max"))
      );
    } else {
      $(this).val($(this).val().replace(" лет", "") + " " + godOrLet2);
      $(".template4-ui-slider-term").text($(this).val().replace("лет", ""));
    }
    // changeData2();
    $(this).parents(".template4-calc_numb-wr").removeClass("maxTemp");
    $(this).parents(".template4-calc_numb-wr").removeClass("minTemp");
  });

  if ($(window).width() <= 500) {
    $(function () {
      //Enable swiping...
      $(".slides-nav-dots").swipe({
        //Generic swipe handler for all directions
        swipe: function (
          event,
          direction,
          distance,
          duration,
          fingerCount,
          fingerData
        ) {
          if (direction == "left") {
            $(".slides-nav-menu").addClass("active");
            $(".slides-nav-dots").removeClass("active");
          }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0,
      });

      $(".slides-nav-menu").swipe({
        //Generic swipe handler for all directions
        swipe: function (
          event,
          direction,
          distance,
          duration,
          fingerCount,
          fingerData
        ) {
          if (direction == "right") {
            $(".slides-nav-menu").removeClass("active");
            $(".slides-nav-dots").addClass("active");
          }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 0,
      });
    });


    let phoneHeplerPlaceholder = $(".phone-helper-placeholder").width() ;
    let phoneHeplerValue = $(".phone-helper-value").width() + 10;
    $(".phone-input").css("width", '100%');
    $(".phone-input").focus(function (event) {
      $(this).css("width", '100%');
    });
    $(".phone-input").blur(function (event) {
      let thisInput = $(this);
      if (thisInput.val() == "" || thisInput.val() == "+_ (___) ___-____") {
        setTimeout(function (event) {
          thisInput.css("width", '100%');
        }, 100);
      } else {
        setTimeout(function (event) {
          $(this).css("width", '100%');
        }, 100);
      }
    });
  } else {
    
    // let phoneHeplerPlaceholder = $(".phone-helper-placeholder").width() ;
    let phoneHeplerValue = $(".phone-helper-value").width() + 20;
    $(".phone-input").css('width', '100%');
    $(".phone-input").focus(function (event) {
      // $(this).css('text-align','left')
      document.querySelector(".phone-input").setSelectionRange(0, 0);
      $(this).css("width", phoneHeplerValue + 10);
    });
    $(".phone-input").blur(function (event) {
      let thisInput = $(this);
      if (thisInput.val() == "" || thisInput.val() == "+_ (___) ___-____") {
        setTimeout(function (event) {
          thisInput.setSelectionRange = 0;
          thisInput.css("width", '100%');
        }, 100);
      } else {
        setTimeout(function (event) {
          $(this).css("width", phoneHeplerValue + 10);
        }, 100);
      }
    });
  }
});
