// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

function CountWords() {
    console.log("CountWords");
    let textareaElement = document.getElementById("txtid");
    let wordcountElement = document.getElementById("count");

    let text = textareaElement.value;
    console.log("texttype= " + typeof(text));
    console.log("text= |" + text + '|');
    let textTrimmed = text.trim();
    console.log("text= |" + textTrimmed + '|');
    let textLength = textTrimmed.length
    console.log("text.length = " +  textLength);

    //Word count
    let words = textTrimmed.split(" ");
    console.log(typeof(words));
    words.forEach(word => console.log(word));

    let wordCount = words.length;
    console.log(textareaElement.textLength);
    //wordCount = textItem.textLength;
    //console.log(wordCount);

    //Fix split error 1 > 0
    if (textLength == 0) 
        wordcountElement.innerHTML = 0;
    else
        wordcountElement.innerHTML = wordCount;
}