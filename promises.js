



// ccintar pasta

const cook = () => {

    const concinar =  new Promise((resolve, reject) => {

        const isSuccess = true;

        if(!isSuccess) {
            reject(new Error('Noo hay pasta'))
        }

        setTimeout(() => {
            resolve('Pasta lista');
        }, 2000);
    
    });



    const pastaLista = false;

    // then , catch

    concinar.then(res => {
        console.log(res);
        pastaLista = true;
    })
    .catch(err => console.log(err))

    console.log(pastaLista)

    return pastaLista;

}




// cook();



//. async y await

const salsaDeTomate = async () => {

 
    const concinar =  new Promise((resolve, reject) => {

        const isSuccess = false;

        if(!isSuccess) {
            reject(new Error('no hay salsa de tomate'))
        }

        setTimeout(() => {
            resolve('Salda de tomate lista');
        }, 2000);
    
    });

    let salsaLista = false;


  const res =  await concinar;

  /*
  salsaLista = res ? res : false;
  salsaLista = res ?? false;
  salsaLista = res || false;
  */

  salsaLista = !!res;

    /*
    concinar.then(res => {
        console.log(res);
        salsaLista = true;
    })
    .catch(err => console.log(err))
    */

    console.log(salsaLista)

    return salsaLista;

}

// try, catch

// contexto async anonimo
(async () => {
    try{
       const res = await salsaDeTomate();
       console.log(res);
    }catch(err){
        console.log(err);
        throw err;
    }
})();

