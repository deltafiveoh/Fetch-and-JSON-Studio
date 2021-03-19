window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
				response.json().then(function(json) {
					const container = document.getElementById("container");
                    let astro = ``;
                    for (astronauts of json){
                        astro += `
                            <div class="astronaut">
                                <div class="bio">
                                    <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${astronauts.hoursInSpace}</li>
                                        <li class="active">Active: ${astronauts.active}</li>
                                        <li>Skills: ${astronauts.skills}</li>
                                    </ul>
                                </div>
                                <img class="avatar" src=${astronauts.picture}>
                            </div>
                        `
                    } 
					container.innerHTML = astro;
					container.innerHTML += `Number of astronauts: ${json.length}`

                    let activegroup = document.getElementsByClassName("active");
                    for (item in activegroup){
                        if (activegroup[item].innerText.includes("true")){
                            activegroup[item].style.color = "green"
                        }
                    }
					});
				});
			});