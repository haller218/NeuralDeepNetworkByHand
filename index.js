const lib = require('./lib.js')

const EPOCADA = 5
const DEBUG = true

const _output = [1,0,0,0]

const _input = [[1,1],[1,0],[0,1],[0,0]]



const startUp = o => {

    pse = lib.inicializaPesos ( {zeros: false, seed: 'lol'})
    
    lib.iniciaRede ( pesos )( _input )( _output )( EPOCADA )( 0.88 )( 0.02 )
}

const main = (ints => {

    startUp () 
})()



