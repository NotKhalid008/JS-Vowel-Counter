var button = document.getElementById("submit2");
var answer = document.getElementById("answer");
var clear = document.getElementById("clear");

button.addEventListener("click", function() {
    
    var input = document.getElementById("inputf").value;
    var vowelCount = (input.match(/[aeiou]/gi) || []).length;
    document.getElementById("answer").innerHTML = vowelCount;
    console.log(input)
});

clear.addEventListener("click", function() {
    document.getElementById("inputf").value = "";
    answer.innerHTML = "";
});
