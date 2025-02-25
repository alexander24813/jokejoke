const jokebtn = document.getElementById("jkbtn");
const output = document.getElementById("out");
const url="https://v2.jokeapi.dev/joke/Any?type=single";



jokebtn.onclick = function() {

let getjoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        output.textContent=item.joke
    });
}
getjoke();}