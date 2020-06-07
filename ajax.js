

function function_name(argument) {

    var instancia = new XMLHttpRequest();
    var url = 'https://www.athmovil.com/rs/v2/transactionStatus';
    ATHM_Checkout = {
        env: 'sandbox',
        publicToken: 'sandboxtoken01875617264',
        theme: 'btn',
        lang: 'en',
        total: 1.00,
        items: null
    }

    instancia.open('POST', url, true);

 
    instancia.setRequestHeader('Content-Type - application/json)');

    instancia.onreadystatechange = function() { 
        if (http.readyState == 4 && http.status == 200) {
            console.log(instancia.responseText);
        }
    }
    instancia.send(ATHM_Checkout);
}

function_name();