

const URL = "http://touiteur.cefim-formation.org/";


function httpGetMessage(timestamp, callback) {
    const request = new XMLHttpRequest()

    request.open('GET', URL + 'list?ts=' + encodeURIComponent(timestamp), true)
    request.addEventListener('readystatechange', function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText))

        }
    });
    request.send();
}

//httpGetMessage(timestamp 0, callback(response)=>{ console.log(response.message);
function httpPostMessage(name, message, callback) {
    const requete1= new XMLHttpRequest(); 
    requete1.open("POST", URL +"send",true); 
    requete1.addEventListener("readystatechange", function(){ 
       if (requete1.readyState === XMLHttpRequest.DONE && requete1.status === 200) {
        callback(JSON.parse(requete1.responseText));
       }
       
    })
    
    requete1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    requete1.send("name="+ encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
    
    
}    




function httpTrending(callback) {
    const request = new XMLHttpRequest()

    request.open('GET', URL + 'trending' , true)
    request.addEventListener('readystatechange', function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText))

        }
    });
    request.send();
}

export { httpGetMessage, httpPostMessage, httpTrending };

//import(httpGetMessage)from ./touitapi

