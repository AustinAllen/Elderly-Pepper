$(function(){
    
});

$.subscribeToALMemoryEvent("prompt", function (data) {
    // console.log("subscribeToALMemoryEvent prompt");
	showPrompt(data);
});

$.subscribeToALMemoryEvent("answer", function (data) {
    // console.log("subscribeToALMemoryEvent answer");
	showAnswer(data);
});

function showPrompt(data) {
    // console.log("showPrompt");
    // var result = data.toString();
    // const sender = document.getElementsByClassName("sender");
    // sender.style.display = "flex";
    document.getElementById("prompt").innerHTML=data;
    document.getElementById("answer").innerHTML="...";
}

function showAnswer(data) {
    // console.log("showAnswer");
    // var result = data.toString();
    // const receiver = document.getElementsByClassName("receiver");
    // receiver.style.display = "flex";
    document.getElementById("answer").innerHTML=data;
}