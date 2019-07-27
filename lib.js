const seedrandom = require('./seedrandom.js')

const sigmod = inp => inp / Math.sqrt(1+Math.pow(2,inp))

const DEBUG = true
const SEED_SET = 'lol'
// const SEED_SET = '00000'


const mudaValorPesos = hate => pesos => flg => {

    const config_local = { iniFine, seed: SEED_SET }

    peso = []
    
    hates = inicializaPesos ( config_local )( tamm )

    if (flg) {

	peso = pesos.map( (r, ind) => {

	    return r + hates[ind]
	} )
    } else {
    
	peso = pesos.map( r => {

	    return r + hate
	} )
    }

    
    return peso
}

const testaAcuracia = inputs => acuracy => {

    acc = inputs.filter ( r => r == true )
    errs = inputs.filter ( r => r == false )

    qtAc = acc.length
    total = inputs.length

    acurray =  (qtAc/total) > acuracy
    
    if (DEBUG) {

	console.log('acurracy: ')
	console.log(acurray)
    }
    
    return acurray
}

const testaRede = lim => input => pesos => epocs => hate => {

    _pesos = pesos

    acuracia = 0.0

  //  for (i = 0; i < epocs; i++) {
    
	resultado = input.map( now => {

	    appl = ApplyToOneNeuro( now )( _pesos )( false )( false )

	    return appl
	})
	
/*	
	test = testaInputsOutputs ( lim )( resultado )( input )

	Novacuracia = testaAcuracia ( test )( lim )

	_pesos = mudaValorPesos ( hate )

	console.log('pesos')
	console.log(_pesos)
	
	console.log('acuracia')
	console.log(acuracia)
	console.log(Novacuracia)
    }

*/
    console.log('pesos: ')
    console.log(pesos)
    console.log('resultado: ')
    console.log(resultado)
    //console.log('input/out')
    //console.log(input)  
    //console.log(output)
    
}

const ApplyToOneNeuro = inpt => pesos => flg => flg2 => {
    
    result = inpt.reduce( (ac,r, indx) => {
	return ac + pesos[indx]*r
    })

    return lib.sigmod(result)
}

const iniciaRede = input => output => epocs => acura => hate => { 

    const tamm = input.length
    const config_local = { zero: false ,seed: SEED_SET }
    
    pesos = []

    pesos = inicializaPesos ( config_local )( tamm )

    if (DEBUG) {
	console.log("pesos iniciais:")
	console.log(pesos)
    }

    testaRede ( acura )( input )( pesos )( epocs )( hate )
}

const testaInputsOutputs = lims => resRN => inptEs => {

    return resRN.map ( (now, index) => {
	
	return ( (!!inptEs[index]) && (now >= lims) )
    })
}

const inicializaPesos = flg => npesos =>  {

    novosPesos = []

    const genRandoness = ( seed , inter ) => binay => {

	const getRandomArbitrary = randoms => ( min, max ) => {
	    
	    cachevaria = (max - min) + min
	    const rans = () => randoms() * cachevaria
	    return rans
	}

	const getRandomInt = randoms => (min, max) => {
	    
	    min = Math.ceil ( min )
	    max = Math.floor ( max )
	    return Math.floor ( randoms (  ) *
		     ( max - min + 1 ) ) + min
	}

	randomNow = Math.random
	
	if (seed) {
	    
	    randomNow = seedrandom(seed)
	}
	
	randomNowInter = getRandomArbitrary(randomNow)(randomNow)

	if (binay) {
	    inter = [1,0]
	    randomNowInter = getRandomInt(randownNow)
	}
	
	randomNow = randomNowInter(inter[0],inter[1])

	return randomNow
	
    }

    const decide = () => {
	func = () => {}
	
	if (typeof(flg.random) == 'object') {
	    flg = flg.random
	    
	    func = genRandoness(flg.seed,flg.inter)(flg.binary)
	} else {

	    func = () => 0
	}

	return func
    }

    const indexs = indx => {
	return novosPesos [indx]
    }

    const main_inits_ram = ( (  ) => {

	apls = decide (  )

	for (i = 0; i< tama; i++)
	    novosPesos.push(decide (  ))

	return indexs
    })()
}

const criaPesos = func => tamanho => {

    peso = []
    
    for (i = 0; i < tamanho; i++) {

	peso.push(func(i))
    }
    
    return peso
}

module.exports = {

    inicializaPesos,
    testaInputsOutputs,
    mudaValorPesos,
    testaAcuracia,
    sigmod,
    testaRede,
    iniciaRede,
    criaPesos
}
