function sortear(){
    let result = document.getElementById("resultado");
    let input = document.getElementById("inp");
    let input1 = document.getElementById("inp2");

    let max = Math.floor(input.value);
    let min = Math.ceil(input1.value);

    result.innerText = Math.floor(Math.random() * (max - min + 1)) + min;
}