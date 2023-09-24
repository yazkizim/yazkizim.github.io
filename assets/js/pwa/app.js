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

var url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.genelpara.com/embed/para-birimleri.json');
$.ajax({
	url: url,
	dataType: 'json',
	async: false,
	success: function(data) {
		if (data['USD']['d_oran'] > 0) { 
			$('#dolar').attr('class', 'text-success');
			$('#dolar').html(parseFloat(data['USD']['satis']).toFixed(2) + '₺');
		} else if (data['USD']['d_oran'] < 0) {
			$('#dolar').attr('class', 'text-danger');
			$('#dolar').html(parseFloat(data['USD']['satis']).toFixed(2) + '₺');
		} else {
            $('#dolar').html(parseFloat(data['USD']['satis']).toFixed(2) + '₺');
        }

		if (data['EUR']['d_oran'] > 0) { 
			$('#euro').attr('class', 'text-success');
			$('#euro').html(parseFloat(data['EUR']['satis']).toFixed(2) + '₺');
		} else if (data['EUR']['d_oran'] < 0){
			$('#euro').attr('class', 'text-danger');
			$('#euro').html(parseFloat(data['EUR']['satis']).toFixed(2) + '₺');
		} else {
            $('#euro').html(parseFloat(data['EUR']['satis']).toFixed(2) + '₺');
        }

		if (data['GA']['d_oran'] > 0) { 
			$('#altin').attr('class', 'text-success');
			$('#altin').html(parseFloat(data['GA']['satis']).toFixed(2) + '₺');
		} else if (data['GA']['d_oran'] < 0) {
			$('#altin').attr('class', 'text-danger');
			$('#altin').html(parseFloat(data['GA']['satis']).toFixed(2) + '₺');
		} else {
            $('#altin').html(parseFloat(data['GA']['satis']).toFixed(2) + '₺');
        }

		if (data['XU100']['degisim'] > 0) { 
			$('#bist').attr('class', 'text-success');
			$('#bist').html(parseFloat(data['XU100']['satis']).toFixed(2) + '₺');
		} else if (data['XU100']['degisim'] < 0) {
			$('#bist').attr('class', 'text-danger');
			$('#bist').html(parseFloat(data['XU100']['satis']).toFixed(2) + '₺');
		} else {
            $('#bist').html(parseFloat(data['XU100']['satis']).toFixed(2) + '₺');
        }

		if (data['BTC']['d_oran'] > 0) { 
			$('#btc').attr('class', 'text-success');
			$('#btc').html(parseFloat(data['BTC']['satis']).toFixed(2) + '$');
		} else if (data['BTC']['d_oran'] < 0){
			$('#btc').attr('class', 'text-danger');
			$('#btc').html(parseFloat(data['BTC']['satis']).toFixed(2) + '$');
		} else {
            $('#btc').html(parseFloat(data['BTC']['satis']).toFixed(2) + '$');
        }
	},
	error: function(){
		$('#dovizbar').hide();
	}
});
