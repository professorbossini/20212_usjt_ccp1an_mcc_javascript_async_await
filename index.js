function fatorial (n){
    if (n < 0) return Promise.reject("Olha, não dá para calcular fatorial de valor negativo.")
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
    return Promise.resolve(res)
}

async function chamadaComAsyncAwait (){
    try{
        const f1 = await fatorial(5)
        console.log(f1)
        const f2 = await fatorial(-1)
        console.log(f2)
    }
    catch (erro){
        console.log ("Tratando o erro: " + erro)
    }
}

chamadaComAsyncAwait()


function chamadaComThenCatch(){
    fatorial(5)
    .then (res => console.log (res))
    .catch (erro => console.log (erro))

    fatorial(-1)
    .then(res => console.log (res))
    .catch (erro => console.log (erro))
}
// chamadaComThenCatch()



// // function soma (a, b){
// //     return a + b
// // }


// // function soma (a, b){
// //     return Promise.resolve (a + b)
// // }

// async function soma (a, b){
//    return a + b 
// }

// const resultado = soma(2, 3)

// resultado.then(resultado => console.log(resultado))