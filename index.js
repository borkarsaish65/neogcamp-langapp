
var textarea = {};

var bodyElement = document.querySelector('.body');

//     var backgroundDivImg = 'url(assets/imgs/' + selected + '.jpg';


//   bodyElement.style.backgroundImage=backgroundDivImg;

var imgSlidShow = ['yoda','pirate','navi','groot'];

var i=0;


setInterval(() => {
   
    var backgroundDivImg = 'url(assets/imgs/' + imgSlidShow[i]+ '.jpg';
    bodyElement.style.backgroundImage=backgroundDivImg;
    i++;
    if(i>3)
    {
        i=0;
    } 
}, 3000);




textarea.value = 'Hello Everyone! My Name is Saish';


var funApiUrl = 'https://api.funtranslations.com/translate/';

var funApiUrl2 = '.json?text=';

// var groot = 'https://api.funtranslations.com/translate/groot.json?text=';

// var shakespeare = 'https://api.funtranslations.com/translate/shakespeare.json?text=';


// var pirate = 'https://api.funtranslations.com/translate/pirate.json?text=';


var testUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=';

const textareadata = document.getElementById('mytextarea');


textarea.value = textareadata.value;

const translateBtn = document.getElementById('translateBtn');


const output1 = document.getElementById('output1')

// const output2 = document.getElementById('output2')
// const output3 = document.getElementById('output3')

{/* <span>Photo by <a href="https://unsplash.com/@itookthose?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sid Balachandran</a> on <a href="https://unsplash.com/s/photos/groot?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}


translateBtn.addEventListener('click',function(e){


   var selected =  document.querySelector("input[name=value]:checked").value;

  
console.log(bodyElement);



   var link = funApiUrl + selected + funApiUrl2 ;

   console.log(selected)

    // console.log(textareadata.value)
    fetch(link+ textareadata.value ).
    then((data)=>data.json())
    .then((json)=>{
        console.log(json)
       output1.innerText =json.contents.translated;
    })
    .catch((Err)=>{console.log(Err)});



})