var randomNumber1 = Math.floor(Math.random() * 6);

var allImage1 = ["images/tag1.jpeg", "images/tag2.jpeg", "images/tag3.jpeg", "images/tag4.jpeg", "images/tag5.jpeg", "images/tag6.jpeg"];

var randomImageSource = allImage1[randomNumber1];

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var allImage2 = ["images/word1.jpeg","images/word2.jpeg","images/word3.jpeg","images/word4.jpeg","images/word5.jpeg","images/word6.jpeg"];

var randomNumber2 = Math.floor(Math.random()*6);

var randomImageSource2 = allImage2[randomNumber2];

document.querySelectorAll("img")[1]. setAttribute("src", randomImageSource2);
