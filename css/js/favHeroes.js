 favHeroContainer.appendChild(div);
    }
    
    // for removing the superhero from list
    const removeButtons = document.getElementsByClassName("removeFav");
    for(let i of removeButtons){
        i.addEventListener("click", function(){
            function remove(value){
                return this.dataset.id != value.id;
            }
            favHeroes = favHeroes.filter(remove.bind(i));
            localStorage.setItem('favHeroes', JSON.stringify(favHeroes));
            location.reload();
        });
    }

}
