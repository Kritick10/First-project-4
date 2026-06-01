function selectCategory(category){

const questions = document.getElementById("questions");

if(category==="Laptop"){

questions.innerHTML = `
<h2>Laptop Requirements</h2>

<input placeholder="Budget"><br>

<input placeholder="Gaming / Study / Editing / Work"><br>

<input placeholder="Battery Importance (1-10)"><br>

<input placeholder="Performance Importance (1-10)"><br>

<input placeholder="Weight Important?"><br>

<input placeholder="Screen Size"><br>

<input placeholder="Brand Preference"><br>

<input placeholder="Country"><br>

<textarea placeholder="Special Requirements"></textarea>

<br><br>

<button>Get Recommendation</button>
`;

}

else{

questions.innerHTML = `
<h2>${category} Questions Coming Next</h2>
`;
}

}
