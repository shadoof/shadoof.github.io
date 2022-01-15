var runs = 0, fades = 0; htmltext = 0;
var fileName = '', textName= '', fileNumber;
// textName's are keys for this object:
var textMax = { 'fot': 41, 'lmr': 72, 'nts': 28, 'tnt': 16 };

window.onload = function() {
  if (document.title == 'What is a BOOK?') return;
	getAndFadeTexts();
  // creates a clickable div to the next
  // sequential text if file name conventions parse
  if (getNameNumber() != '') {
  	console.log('name: ' + textName);
	  console.log('number: ' + fileNumber);
	  nextDiv = document.createElement("DIV");
	  nextDiv.id = 'next';
    arrowSpan = document.createElement("DIV");
  	  arrowSpan.setAttribute('onclick', 'goNext()');
      arrow = document.createTextNode('>');
      arrowSpan.appendChild(arrow);
    idxSpan = document.createElement("DIV");
  	  idxSpan.setAttribute('onclick', 'fadeAndGo("lmridx.html")');
      idxSpan.innerHTML = "<small>idx</small>"
      // idxTxt = document.createTextNode('>idx<');
      // idxSpan.appendChild(idxTxt);
    nextDiv.appendChild(arrowSpan);
    nextDiv.appendChild(idxSpan);
	  document.getElementsByTagName('BODY')[0].appendChild(nextDiv);
  }
  
}

function getNameNumber() {
  // expects a textName of all lowercase letters
  // immediately followed by a fileNumber
  n = document.documentURI;
  n = n.match(/([a-z]+)(\d+)\./);
  // if no match return an empty string
  if (n == null) return '';
  textName = n[1];
  fileNumber = n[2];
  return textName;
}

function goNext(whichWay) {
	// get the name of this file
	getNameNumber();
	// calculate the name of next in sequence
	fileNumber = parseInt(fileNumber) + 1;
	// console.log('fileNumber: ' + fileNumber + ' textMax: ' + textMax[fileName]);
	if (fileNumber > textMax[textName]) fileName = '../index';
	else fileName = textName + fileNumber;
	fileName = fileName + '.html';
	// console.log('fileName: ' + fileName);
	fg = document.getElementById('fg');
	if (fg != null || whichWay == 'fadeFirst') {
		fadeAndGo(fileName);
	}
	else {
		location.href=fileName;
	}
}

function fadeAndGo(para) {
//  let text = document.querySelector('.alWaysOn');
//  if (text) {
//    text.classList.toggle('always)n');
//  }
  getAndFadeTexts();
  goParaWithDelay(para);
}

function goPara(para) {
  location.href = para;
}

function goParaWithDelay(para) {
  setTimeout(function() {location.href = para;}, 2500);
}

//function newHTML() {  
//  document.getElementById('content').innerHTML = htmltexts[htmltext++];
//  setTimeout(getAndFadeTexts, 100);
//  setTimeout(function() {
//    document.getElementById('blue').style.color = 'blue';
//  }, 3000);
//}

function getAndFadeTexts() {
  const texts = document.querySelectorAll('.text');
  texts.forEach(fade);
//  setTimeout(function() {
//    document.getElementById('blue').style.color = 'blue';
//  }, 3000);
  console.log('getAndFadeTexts run number: ' + ++runs);
}

function fade(text) {
//  text.classList.toggle('readable');
  text.classList.remove('alwaysOn');
  text.classList.toggle('invisible');
  console.log('fade number: ' + ++fades);
}
