document.addEventListener("DOMContentLoaded",function(){
  let dynamicContent = document.getElementById("dynamic-text");
  let phrases = ["Learner...", "Pragmatic...", "Human Being..."];
  let phraseIndex = 0;
  let letterIndex = 0;
  const typingSpeed=170;
  const erasingSpeed=90;
  
  
  function printLetter(phrase) {
    if (letterIndex == phrase.length) {
      clearLetter();
    
    }
     else if (letterIndex < phrase.length) {
      dynamicContent.textContent += phrase[letterIndex];
      letterIndex++;
    
      setTimeout(function () {
        printLetter(phrase);
      }, typingSpeed);
    }
  }
  
  function clearLetter() {
    if (letterIndex ==-1) {
      phraseIndex=(phraseIndex+1)%(phrases.length)
      letterIndex=0;
      printLetter(phrases[phraseIndex]);
    }
  
     else if (letterIndex > -1) {
      let updatedPhrase = "";
      for (let index = 0; index < letterIndex; index++) {
        updatedPhrase += phrases[phraseIndex][index];
      }
    
      dynamicContent.textContent = updatedPhrase;
      letterIndex--;
      setTimeout(clearLetter, erasingSpeed);
    }
  }
  
  printLetter(phrases[phraseIndex]);
  
})




