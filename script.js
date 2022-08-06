/*Elementos */
class ElementosDaBarraPesquisa{
    constructor(nomeClasse){
        this.elementos = document.getElementsByClassName(nomeClasse)
    }
    barra = () => {return this.elementos[0]}
    campo = () => {return this.elementos[1]}
    botao = () => {return this.elementos[2]}
}
/*Pesquisa*/
class Pesquisar extends ElementosDaBarraPesquisa{
    constructor(nomeClasse){
        super(nomeClasse)
    }
    pressionarEnter(){
        this.campo().addEventListener('keypress', (e) => {
            if(e.key === 'Enter'){
                this.comandoProcura()
            }
        })
    }
    comandoProcura(){
        window.open(`https://www.google.com/search?q=${this.campo().value}`, '_blank')
        this.campo().value = ''
    }
}
/*Seletor de Estilo*/
class MudarEstilo extends ElementosDaBarraPesquisa{
    constructor(nomeClasse){
        super(nomeClasse)
        this.cor = ['', 'Escuro', 'Claro', 'Rosa', 'Azul', 'Vermelho', 'Verde']
    }
    mudar(n){
        if(n != 0){
           this.barra().setAttribute('id', `pesquisar${this.cor[n]}`)
           this.campo().setAttribute('id', `pesquisarCampo${this.cor[n]}`)
           this.botao().setAttribute('id', `pesquisarBotao${this.cor[n]}`)
        }else{
            this.barra().setAttribute('id', `${this.cor[n]}`)
            this.campo().setAttribute('id', `${this.cor[n]}`)
            this.botao().setAttribute('id', `${this.cor[n]}`)
        }   
    }
}
class SeletorDeEstilo extends MudarEstilo{
    constructor(idSeletor, nomeClasse){
        super(nomeClasse)
        this.seletor = document.getElementById(idSeletor)
    }
    selecionarEstilo(){
        this.mudar(this.seletor.value)
    }
}
/*Execuções*/
function executarPesquisaBotao(nomeClasse){
    let pesquisar = new Pesquisar(nomeClasse)
    pesquisar.comandoProcura()
}
function execurtarPesquisaBarra(nomeClasse){
    let pesquisar = new Pesquisar(nomeClasse)
    pesquisar.pressionarEnter()
}
function executarMudancaEstilo(id, classe){
    const mudar = new SeletorDeEstilo(id, classe)
    mudar.selecionarEstilo()
}