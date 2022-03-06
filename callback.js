function WelcomeMessage(name,grettHandaler){

          
          grettHandaler(name);
          // console.log()
          // console.log(grettHandaler)
}



function greTTingnorning(name){

          console.log("Good morning",name)
}
function greTTingafternoon(name){

          console.log("Good morning",name)
}
function greTTingEvening(name){

          console.log("Good Evening",name)
}
// const names= {name:"me",age:23}
WelcomeMessage("sakib",greTTingnorning); 
WelcomeMessage("rashed",greTTingafternoon); 
WelcomeMessage("sadnan",greTTingafternoon); 
