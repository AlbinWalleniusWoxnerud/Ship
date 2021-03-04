let Pokemon=["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
const locationInDoc = document.querySelector('div#pd-container');
const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const baseWikiUrl = 'https://pokemon.fandom.com/wiki/';
let i = 1;
for (let pokemon of Pokemon) { 
    const divOfDiv = document.createElement('div');
    divOfDiv.classList.add('pd-individualPokemonContainer');
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `${baseImgUrl}${i}.png`;
    const wikiLinkName = document.createElement('a');
    wikiLinkName.href = `${baseWikiUrl}${pokemon}`;
    wikiLinkName.target = `_blank`;
    wikiLinkName.innerText = `${pokemon}`
    const wikiLinkImg = document.createElement('a');
    wikiLinkImg.href = `${baseWikiUrl}${pokemon}`;
    wikiLinkImg.target = `_blank`;
    wikiLinkImg.appendChild(pokemonImg);
    divOfDiv.appendChild(wikiLinkImg);
    divOfDiv.appendChild(wikiLinkName);
    locationInDoc.appendChild(divOfDiv);
    i++;
}