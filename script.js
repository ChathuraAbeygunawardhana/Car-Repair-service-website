$(document).ready(function () {
  $('.fa-bars').click(function () {
    $('.nav-links').slideToggle(3000);
  });
});

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  let width = $(window).width();

  if (scroll >= 70 && width >= 995) {
    $('nav').addClass('new-nav');

    $('nav ul li a').css({ color: 'black' });

    $('.nav-heading span').css({ color: 'black' });
    $('.nav-heading span>i').css({ color: '#F85A40' });
    $('.fa-moon').css({ color: 'black' });

    // $('nav ul li a').css({"color": "black"})

    // $('.nav-heading span').css({"color":"black"})
    // $('.nav-heading span>i').css({"color":"#F85A40"})
  } else if (scroll == 0 && width >= 995) {
    $('nav').removeClass('new-nav');
    $('nav ul li a').css({ color: '#fff' });
    $('.nav-heading span>i').css({ color: '#fff' });

    $('.nav-heading span').css({ color: 'white' });

    $('.fa-moon').css({ color: '#fff' });
    // $('nav ul li a').css({"color": "#fff"})

    // $('.nav-heading span').css({"color":"#fff"})
    // $('.nav-heading span>i').css({"color":"#fff"})
  } else if (scroll >= 70 && width < 995) {
    $('.nav-heading span').css({ color: 'black' });
    $('nav').addClass('new-nav');
    $('.nav-heading span').addClass('black');
    $('.nav-heading span>i').css({ color: '#F85A40' });
    $('.fa-moon').css({ color: 'black' });
  } else if (scroll == 0 && width < 995) {
    $('nav').removeClass('new-nav');
    $('.nav-heading span').css({ color: 'white' });
    $('.nav-heading span').removeClass('black');
    $('.fa-moon').css({ color: 'white' });

    $('.nav-links>span>i').css({ color: '#fff' });
  }
});

let x = document.querySelector(' .night');

x.addEventListener('click', () => {
  let y = document.querySelectorAll('.goblack');
  for (let i = 0; i < y.length; i += 1) {
    y.item(i).classList.toggle('dark-mode');
  }
});

if ('WebSocket' in window) {
  (function () {
    function refreshCSS() {
      var sheets = [].slice.call(document.getElementsByTagName('link'));
      var head = document.getElementsByTagName('head')[0];
      for (var i = 0; i < sheets.length; ++i) {
        var elem = sheets[i];
        var parent = elem.parentElement || head;
        parent.removeChild(elem);
        var rel = elem.rel;
        if (
          (elem.href && typeof rel != 'string') ||
          rel.length == 0 ||
          rel.toLowerCase() == 'stylesheet'
        ) {
          var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
          elem.href =
            url +
            (url.indexOf('?') >= 0 ? '&' : '?') +
            '_cacheOverride=' +
            new Date().valueOf();
        }
        parent.appendChild(elem);
      }
    }
    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    var address =
      protocol + window.location.host + window.location.pathname + '/ws';
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
      if (msg.data == 'reload') window.location.reload();
      else if (msg.data == 'refreshcss') refreshCSS();
    };
    if (
      sessionStorage &&
      !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')
    ) {
      console.log('Live reload enabled.');
      sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
    }
  })();
} else {
  console.error(
    'Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.'
  );
}
// ]]>
