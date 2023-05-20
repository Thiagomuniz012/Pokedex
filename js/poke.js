//IMPORTANDO DO HTML

const pokemonId = document.getElementById("pokemon-id")
const pokemonName = document.getElementById("pokemon-name")
const pokemonSpecs = document.getElementById("pokemon-specs")
const pokemonSpecs2 = document.getElementById("pokemon-specs2")
const pokemonSpecs3 = document.getElementById("pokemon-specs3")
const pokemonSpecs4 = document.getElementById("pokemon-specs4")
const pokemonSpecs5 = document.getElementById("pokemon-specs5")
const pokemonImg = document.getElementById("gif")
const pokemonImg2 = document.getElementById("gif2")
const form = document.getElementById("form")
const input = document.getElementById("input_search")
const botaoAnterior = document.querySelector('.btn-anterior')
const botaoProximo = document.querySelector('.btn-proximo')
const abrir = document.getElementById("abrir")
const imgPokedex = document.getElementById("img-pokedex")
const input_submit = document.getElementById("input_submit")
const fechar_pokedex = document.getElementById("fechar_pokedex")
const botoesAzul = document.querySelector(".container-botao")
const visor = document.querySelector("#visor")

//DEIXANDO TUDO NONE ATÉ INICIAR
const elementos = [pokemonId, pokemonName, pokemonSpecs, pokemonSpecs2, pokemonSpecs4, pokemonSpecs4, pokemonImg, pokemonImg2, input, botaoAnterior, botaoProximo, imgPokedex, input_submit, fechar_pokedex, botoesAzul, visor];

elementos.forEach(elemento => {
  elemento.style.display = "none";
});

//FECHAR POKEDEX
function closePoke() {
  abrir.style.display = "block"
  elementos.forEach(elemento => {
    elemento.style.display = "none";
  });
}

//MOSTRA O TIPO
function pokeTipo() {
  pokemonSpecs.style.display = "block"
  pokemonSpecs2.style.display = "none"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs4.style.display = "none"
  pokemonSpecs5.style.display = "none"
}

//MOSTRA A HABILIDADE
function pokeHabilidade() {
  pokemonSpecs.style.display = "none"
  pokemonSpecs2.style.display = "block"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs4.style.display = "none"
  pokemonSpecs5.style.display = "none"
}



//MOSTRA VERSAO SHINY
var isOn = false;

function pokeShiny() {

  if (isOn) {
    // Desligar
    isOn = false;
    pokemonSpecs5.style.display = "none"
    pokemonSpecs4.style.display = "none"
    pokemonSpecs3.style.display = "none"
    pokemonSpecs2.style.display = "none"
    pokemonSpecs.style.display = "none"
    pokemonImg.style.display = "block"
    pokemonImg2.style.display = "none"
  } else {
    // Ligar
    isOn = true;
    pokemonSpecs5.style.display = "none"
    pokemonSpecs4.style.display = "none"
    pokemonSpecs3.style.display = "block"
    pokemonSpecs2.style.display = "none"
    pokemonSpecs.style.display = "none"
    pokemonImg.style.display = "none"
    pokemonImg2.style.display = "block"
  }
}

//mostra peso
function pokePeso() {
  pokemonSpecs5.style.display = "none"
  pokemonSpecs4.style.display = "block"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs2.style.display = "none"
  pokemonSpecs.style.display = "none"
  pokemonImg.style.display = "block"
  pokemonImg2.style.display = "none"
}

//mostra peso
function pokeAltura() {
  pokemonSpecs5.style.display = "block"
  pokemonSpecs4.style.display = "none"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs2.style.display = "none"
  pokemonSpecs.style.display = "none"
  pokemonImg.style.display = "block"
  pokemonImg2.style.display = "none"
}

//estado padrao
function estadoPadrao() {
  pokemonSpecs5.style.display = "none"
  pokemonSpecs4.style.display = "none"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs2.style.display = "none"
  pokemonSpecs.style.display = "none"
  pokemonImg.style.display = "block"
  pokemonImg2.style.display = "none"
}


//INICIAR POKEDEX
function iniciar() {
  abrir.style.display = "none"
  const elementos = [pokemonId, pokemonName, pokemonImg, pokemonImg2, imgPokedex, botaoAnterior, botaoProximo, input, input_submit, fechar_pokedex, botoesAzul, visor, pokemonSpecs3, pokemonSpecs, pokemonImg2];

  elementos.forEach(elemento => {
    elemento.style.display = "block";
  });
  pokemonSpecs5.style.display = "none"
  pokemonSpecs3.style.display = "none"
  pokemonSpecs.style.display = "none"
  pokemonImg2.style.display = "none"

  let searchPokemon = 1

  const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      console.log(data)
      return data
    }
  }

  //RENDERIZA OS POKEMONS E O QUE VAI APARECER NA POKEDEX
  const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando..'

    const data = await fetchPokemon(pokemon)

    //inicia o tipo
    if (data['types'] && data['types'][0] && data['types'][0]['type'] && data['types'][0]['type']['name']) {
      const type1 = data['types'][0]['type']['name']
      const type2 = data['types'][1] && data['types'][1]['type'] && data['types'][1]['type']['name']
      pokemonSpecs.innerHTML = type2 ? `${type1.charAt(0).toUpperCase() + type1.slice(1)} / ${type2.charAt(0).toUpperCase() + type2.slice(1)}` : `${type1.charAt(0).toUpperCase() + type1.slice(1)}`
    } else {
      pokemonSpecs.innerHTML = 'Unknown'
    }

    //inicia as habilidades
    if (data['abilities'] && data['abilities'][0] && data['abilities'][0]['ability'] && data['abilities'][0]['ability']['name']) {
      const type1 = data['abilities'][0]['ability']['name']
      const type2 = data['abilities'][1] && data['abilities'][1]['ability'] && data['abilities'][1]['ability']['name']
      pokemonSpecs2.innerHTML = type2 ? `${type1.charAt(0).toUpperCase() + type1.slice(1)} / ${type2.charAt(0).toUpperCase() + type2.slice(1)}` : `${type1.charAt(0).toUpperCase() + type1.slice(1)}`
    } else {
      pokemonSpecs2.innerHTML = 'Unknown'
    }

    //inicia os dados que vao aparecer
    if (data) {
      pokemonId.innerHTML = data.id
      pokemonName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1)

      //inicia o gif
      if (pokemon >= 650) {
        pokemonImg.src = data['sprites']['front_default']
      } else {
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
      }
      input.value = ''
      searchPokemon = data.id
    } else {
      pokemonId.innerHTML = ''
      pokemonName.innerHTML = 'Não existe'
      pokemonImg.src = ''
    }

    //peso do pokemon
    pokemonSpecs4.innerHTML = data['weight'] / 10 + " kg"

    //altura do pokemon
    var altura = data['height']
    var unidade = (altura < 1) ? " cm" : " m";
    var mostrar = altura / 10 + unidade;
    
    pokemonSpecs5.innerHTML = mostrar;
    


    //inicia o gif shiny
    if (data) {
      if (pokemon >= 650) {
        pokemonImg2.src = data['sprites']['front_shiny']
        pokemonSpecs3.innerHTML = 'Shiny'
      } else {
        pokemonImg2.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
        pokemonSpecs3.innerHTML = 'Shiny'
      }
      input.value = ''
      searchPokemon = data.id
    } else {
      pokemonImg.src = ''
      pokemonSpecs3.innerHTML = 'Unknown'
    }
  }

  //enviar os dados do formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
  })

  //botao de anterior
  botaoAnterior.addEventListener('click', () => {
    if (searchPokemon > 1) {
      searchPokemon -= 1
      renderPokemon(searchPokemon)
    }
  })

  //botao de proximo
  botaoProximo.addEventListener('click', () => {
    if (searchPokemon < 1010) {
      searchPokemon += 1
      renderPokemon(searchPokemon)
    }
  })

  renderPokemon(searchPokemon)
}

