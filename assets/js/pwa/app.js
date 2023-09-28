---
layout: compress
permalink: '/app.js'
---

const $notification = $('#notification');
const $btnRefresh = $('#notification .toast-body>button');

if ('serviceWorker' in navigator) {
    /* Registering Service Worker */
    navigator.serviceWorker.register('{{ "/sw.js" | relative_url }}')
        .then(registration => {

            /* in case the user ignores the notification */
            if (registration.waiting) {
                $notification.toast('show');
            }

            registration.addEventListener('updatefound', () => {
                registration.installing.addEventListener('statechange', () => {
                    if (registration.waiting) {
                        if (navigator.serviceWorker.controller) {
                            $notification.toast('show');
                        }
                    }
                });
            });

            $btnRefresh.click(() => {
                if (registration.waiting) {
                    registration.waiting.postMessage('SKIP_WAITING');
                }
                $notification.toast('hide');
            });
        });

    let refreshing = false;

    /* Detect controller change and refresh all the opened tabs */
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
            window.location.reload();
            refreshing = true;
        }
    });
}

/*

*/


$.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.genelpara.com/embed/para-birimleri.json'), function(data) {
	var veri = JSON.parse(data.contents);	
	
    if (veri.USD.d_oran > 0) {
        $('#dolar').attr('class', 'text-success');
        $('#dolar').html(parseFloat(veri.USD.satis).toFixed(2) + ' ₺');
    } else if (veri.USD.d_oran < 0) {
        $('#dolar').attr('class', 'text-danger');
        $('#dolar').html(parseFloat(veri.USD.satis).toFixed(2) + ' ₺');
    } else {
        $('#dolar').html(parseFloat(veri.USD.satis).toFixed(2) + ' ₺');
    }
    if (veri.EUR.d_oran > 0) {
        $('#euro').attr('class', 'text-success');
        $('#euro').html(parseFloat(veri.EUR.satis).toFixed(2) + ' ₺');
    } else if (veri.EUR.d_oran < 0) {
        $('#euro').attr('class', 'text-danger');
        $('#euro').html(parseFloat(veri.EUR.satis).toFixed(2) + ' ₺');
    } else {
        $('#euro').html(parseFloat(veri.EUR.satis).toFixed(2) + ' ₺');
    }
    if (veri.GA.d_oran  > 0) {
        $('#altin').attr('class', 'text-success');
        $('#altin').html(parseFloat(veri.GA.satis).toFixed(2) + ' ₺');
    } else if (veri.GA.d_oran < 0) {
        $('#altin').attr('class', 'text-danger');
        $('#altin').html(parseFloat(veri.GA.satis).toFixed(2) + ' ₺');
    } else {
        $('#altin').html(parseFloat(veri.GA.satis).toFixed(2) + ' ₺');
    }
    if (veri.XU100.degisim > 0) {
        $('#bist').attr('class', 'text-success');
        $('#bist').html(parseFloat(veri.XU100.satis).toFixed(2) + ' ₺');
    } else if (veri.XU100.degisim < 0) {
        $('#bist').attr('class', 'text-danger');
        $('#bist').html(parseFloat(veri.XU100.satis).toFixed(2) + ' ₺');
    } else {
        $('#bist').html(parseFloat(veri.XU100.satis).toFixed(2) + ' ₺');
    }
    if (veri.BTC.d_oran > 0) {
        $('#btc').attr('class', 'text-success');
        $('#btc').html(parseFloat(veri.BTC.satis).toFixed(2) + ' $');
    } else if (veri.BTC.d_oran< 0) {
        $('#btc').attr('class', 'text-danger');
        $('#btc').html(parseFloat(veri.BTC.satis).toFixed(2) + ' $');
    } else {
        $('#btc').html(parseFloat(veri.BTC.satis).toFixed(2) + ' $');
    }
}).fail(function() {
    $('#dovizbar').hide();
});

var siteadres = "https://counterapi.com/api/adliyeci.com.tr";
var adres = window.location.pathname;

$.getJSON(siteadres + "/view" + adres, function(response) {
    console.log(response.value);
});
                  
