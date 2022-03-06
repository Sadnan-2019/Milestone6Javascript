console.log("ll");

const loadSingleUser = () => {
  fetch(`https://randomuser.me/api/`)
    .then((res) => res.json())
    .then((data) => DispalySingleUser(data.results[0]));
};

// loadSingleUser();

const DispalySingleUser = (users) => {
  const userDetails = document.getElementById("user-details");
  const p = document.createElement("p");
  p.innerHTML = ` ${users.gender},${users.email},`;
  userDetails.appendChild(p);

  console.log(users);
};

const searchMeal = () => {
  const Searchtext = document.getElementById("search-field") ;
  const SearchValue=Searchtext.value;

  if(Searchtext == ""){
            // ToggoleSpinner("none")
            console.log("errore")
  }
  else{
    ToggoleSpinner("block");
    ToggoleSearchResult("none")
    loadMeals(SearchValue);

  }
  document.getElementById("search-field").value = "";


};

const ToggoleSpinner = displayStyle => {
  document.getElementById("spinner").style.display = displayStyle;
};

const ToggoleSearchResult =displayStyle =>
{
          document.getElementById('meals-details').style= displayStyle;

}
const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => DisplayMeals(data.meals));
    // document.getElementById("spinner").style.display ="none"

};

loadMeals("");

const DisplayMeals = (mealsDetails) => {
  const mealsDetailsDiv = document.getElementById("meals-details");
  mealsDetailsDiv.textContent = "";
  console.log(mealsDetails)
  if(!mealsDetails){
    document.getElementById("spinner").style.display ="block"
    const p = document.createElement('p');
    p.innerText =alert('Not Found');
   
   
  }

  mealsDetails?.forEach((mealsDetail) => {
    const div = document.createElement("div");
    div.classList.add("meal");
    div.innerHTML = `
                    <img width="500px" class="img-fluid" src=" ${mealsDetail.strMealThumb}">
                    <br>
                    <br>
                    <h4>${mealsDetail.strMeal}</h4>
                    <h5>Ingredient : ${mealsDetail.strIngredient18 ? mealsDetail.strIngredient18 : ""}</h5>
                  
    <br>
                    <button class="btn btn-info my-2" onclick="LoadMealDetails('${mealsDetail.strMeal}')">Details</button>
    
    
    `;
    mealsDetailsDiv.appendChild(div);
    ToggoleSpinner("none");
    ToggoleSearchResult('block')
  });

  //   console.log(mealsDetails);
};

const LoadMealDetails = (Details) => {
  console.log(Details);
};
