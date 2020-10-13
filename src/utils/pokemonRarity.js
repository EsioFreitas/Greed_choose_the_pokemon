const pokemon = require('./pokemons');

let pokemons = pokemon.pokemons;

const rarities = {
    1: ['Caterpie','Weedle','Pidgey','Pidgeotto','Rattata','Raticate','Spearow','Fearow','Ekans','Sandshrew','Sandslash','Nidoran ♀','Nidorina','Nidoqueen','Nidoran ♂','Nidorino','Jigglypuff','Zubat','Golbat','Oddish','Gloom','Paras','Parasect','Venonat','Venomoth','Diglett','Meowth','Psyduck','Golduck','Mankey','Poliwag','Machop','Machoke','Bellsprout','Weepinbell','Tentacool','Tentacruel','Geodude','Graveler','Slowpoke','Slowbro','Magnemite','Doduo','Dodrio','Seel','Grimer','Gastly','Drowzee','Krabby','Voltorb','Horsea','Goldeen','Magikarp','Gyarados'],
    2: ['Metapod', 'Kakuna', 'Arbok', 'Dugtrio', 'Persian', 'Primeape', 'Magneton', 'Dewgong', 'Hypno', 'Kingler', 'Electrode', 'Koffing', 'Tangela', 'Seaking'],
    3: ['Clefairy','Vulpix','Victreebel',"Farfetch'd",'Muk','Onix','Seadra'],
    4: ['Butterfree','Beedrill','Wigglytuff','Vileplume','Growlithe','Poliwhirl','Kadabra','Machamp','Ponyta','Haunter','Exeggcute','Rhyhorn'],
    5: ['Pikachu','Raichu','Poliwrath','Abra','Cubone','Marowak','Lickitung','Weezing','Rhydon','Tauros'],
    6: ['Nidoking','Rapidash','Staryu','Jynx'],
    7: ['Clefable','Shellder','Cloyster','Ditto'],
    8: ['Bulbasaur','Charmander','Squirtle','Hitmonlee','Hitmonchan','Chansey','Kangaskhan','Mr. Mime','Scyther','Magmar','Pinsir','Dratini','Dragonair'],
    9: ['Electabuzz','Lapras','Eevee','Snorlax'],
    10: ['Ivysaur','Venusaur','Charmeleon','Charizard','Wartortle','Blastoise','Pidgeot','Ninetales','Arcanine','Alakazam','Golem','Gengar','Exeggutor','Starmie','Vaporeon','Jolteon','Flareon','Porygon','Omanyte','Omastar','Kabuto','Kabutops','Aerodactyl','Articuno','Zapdos','Moltres','Dragonite','Mewtwo','Mew']
}

pokemons = pokemons.map(mon => {
    Object.keys(rarities).forEach(rarity => {
        const isIn = rarities[rarity].includes(mon.name);
        if (isIn) {
            mon.rarity = parseInt(rarity);
        }
    })
    return mon;
})

module.exports = pokemons;