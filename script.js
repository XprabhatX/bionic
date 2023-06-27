// document.querySelector('#inputText').addEventListener('click', (e) => updatetext(e))

document.querySelector('#go-btn').addEventListener('click', ()=>updatetext())

function bionic(str) {
    let cut = 0
    console.log(str)
    boldPart = ''
    if (str.length != null)
        
    {
        if (str.length <= 3)
            cut = 0;
        else
            cut = (str.length%2 == 0)? (str.length/2) : ((str.length/2)+1)

        boldPart = (cut > 0)? str.slice(0, cut+1) : str[0]
        return `<b>${boldPart}</b>${str.slice(cut+1)}`
    }
}

function updatetext() {
    givenText = document.getElementById('inputText').value
    let outputBox = document.querySelector('#outputText')
    let bionicArr=[""];
    let wordArr = givenText.split(" ")
    console.log(wordArr)
    if(wordArr.length!=0){
        //  bionicArr = wordArr.filter((item)=>{item === " "})
        let bionicArr = wordArr.map((item) => bionic(item))
        console.log(bionicArr)
         let finalText = ''
         for (let i = 0; i < bionicArr.length; i++) {
            finalText += bionicArr[i] + " ";
         }
         outputBox.innerHTML = `<p>${finalText}</p>`
    }

    
}