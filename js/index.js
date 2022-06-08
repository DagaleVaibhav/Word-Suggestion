word=["कामात","कॉलेज","अहमदनगर","परत","कडलग ","उदाहरण","वैभव","शंकर","रोहित","मंगेश","अमीर"];


function wordSugg(){
	const wordsDiv = document.getElementById("suggestedWords")
	wordsDiv.innerHTML = ""
	const inputVal = event.target.value

	for(var i=0;i<word.length;i++){
		for(var j=0;j<inputVal.length;j++){
			if(word[i][j]==inputVal[j]){
				flag=true
			}else{
				flag=false
				break
			}
		}
		if(flag){
			console.log(word[i])
			showWord(word[i])
		}
	}
}

function showWord(sgword){
	const wordsDiv = document.getElementById("suggestedWords")

	const sgwordElement = document.createElement("p");
	sgwordElement.innerText = sgword;
	sgwordElement.id = "sgWord";
	wordsDiv.appendChild(sgwordElement);
	wordsDiv.addEventListener("click", selectWord)
}

function selectWord(event){
	const wordInput=document.getElementById("wordInput")
	console.log(event.target.innerText)
	wordInput.value=event.target.innerText	
}