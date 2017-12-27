var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click' , function(){
    getJoke();
});

document.addEventListener("DOMContentLoaded",getJoke());

function getJoke() {
            var paragraph = document.getElementById('joke');
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.addEventListener('load', function(){
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
            xhr.send();
    };