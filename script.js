/*Elementos */
class ElementosDaBarraDePesquisa{
    constructor(nomeClasse){
        this.elementos = document.getElementsByClassName(nomeClasse)
        this.opcoes = ['Padrão', 'Escuro', 'Claro', 'Rosa', 'Azul', 'Vermelho', 'Verde']
    }
    barra = () => {return this.elementos[0]}
    campo = () => {return this.elementos[1]}
    botao = () => {return this.elementos[2]}
    seletor = () => {return this.elementos[3]}
}
/*Comandos de Pesquisa*/
class ComandosDaBarraDePesquisa extends ElementosDaBarraDePesquisa{
    constructor(nomeClasse){
        super(nomeClasse)
    }
    detectarTeclaEnter(){
        this.campo().addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                this.comandoProcurar()
            }
        })
    }
    comandoProcurar(){
        window.open(`https://www.google.com/search?q=${this.campo().value}`, '_blank')
        this.campo().value = ''
    }
}
/*Seletor de Estilo*/
class SeletorDaBarraDePesquisa extends ComandosDaBarraDePesquisa{
    constructor(nomeClasse){
        super(nomeClasse)
    }
    #mudarEstilo(value){
        if(value != 0){
            this.barra().setAttribute('id', `barra${this.opcoes[value]}`)
            this.campo().setAttribute('id', `campo${this.opcoes[value]}`)
            this.botao().setAttribute('id', `botao${this.opcoes[value]}`)
         }  
    }
    construirOpcoes(){
        for(var i = 0; i < this.opcoes.length; i++){
            let inn = document.createElement('option')
            inn.setAttribute('value', `${i}`)
            inn.innerHTML = `${this.opcoes[i]}`
            this.seletor().appendChild(inn)
        }
    }
    selecionarEstilo(){
        this.#mudarEstilo(this.seletor().value)
    }
}
/*Execuções*/
class Executar{
    comandoClick(nomeClasse){
        let pesquisar = new ComandosDaBarraDePesquisa(nomeClasse)
        pesquisar.comandoProcurar()
    }
    comandoEnter(nomeClasse){
        let pesquisar = new ComandosDaBarraDePesquisa(nomeClasse)
        pesquisar.detectarTeclaEnter()
    }
    montarSeletor(nomeClasse){
        let opcoes = new SeletorDaBarraDePesquisa(nomeClasse)
        opcoes.construirOpcoes()
    }
    mudarEstilo(nomeClasse){
        let mudar = new SeletorDaBarraDePesquisa(nomeClasse)
        mudar.selecionarEstilo()
    }
}

