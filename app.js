let cardImage = document.querySelector(".cardImage");
let nume = document.querySelector(".name");
let speed = document.querySelector(".speed");
let attack = document.querySelector(".attack");
let defense = document.querySelector(".defense");
let submitBtn = document.querySelector(".submitBtn");
let hp = document.querySelector(".hp");
let ability = document.querySelector(".ability");
let numberCard = document.querySelector(".numberCard");
let demage = document.querySelector(".demage");

submitBtn.addEventListener("click" , submit =>{
    submit.preventDefault();

    let id = document.querySelector(".searchBtn").value;

    fetch(` https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(rec => rec.json())
        .then(response => {
            console.log(response);

            let img = response.sprites.front_default;
            let newName = response.name;

            let newSpeed = response.stats[5].base_stat;
            let newAttack = response.stats[1].base_stat;
            let newDefense = response.stats[2].base_stat;
            let newHp = response.stats[0].base_stat;
            let newAbility = response.abilities[1].ability.name;
            let newNumberCard = response.id;
            let newDemage = response.stats[1].base_stat;

            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            nume.innerText = newName;
            
            demage.innerHTML = Number(newDemage - 40);
            numberCard.innerHTML = newNumberCard;
            defense.innerText = newDefense;
            speed.innerText = newSpeed;
            attack.innerText = newAttack;
            cardImage.innerHTML = `<img src=${img}>`;
            hp.innerText = "HP: " + newHp;
            ability.innerText = "Ability: " + newAbility.charAt(0).toUpperCase() + newAbility.slice(1)
        });
});
 