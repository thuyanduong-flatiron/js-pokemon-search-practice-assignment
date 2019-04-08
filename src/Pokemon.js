class Pokemon {
  static all = []

  constructor(pokemon){
    this.name = pokemon.name
    this.frontSprite = pokemon.sprites.front
    this.backSprite = pokemon.sprites.back
    Pokemon.all.push(this)
  }

  render(){
    let div = document.createElement("div")
    div.innerHTML = `
      <div class="pokemon-container" data-front-sprite="${this.frontSprite}" data-back-sprite="${this.backSprite}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${this.frontSprite}">
          </div>
        </div>
      </div>`
    document.querySelector("#pokemon-container").appendChild(div)
    div.addEventListener("click", this.flip.bind(this))
  }

  flip(event){
    event.currentTarget.querySelector('img').src = (
      event.currentTarget.querySelector('img').src === this.frontSprite ? this.backSprite : this.frontSprite
    )
  }

}
