const minhaPromise = () => new Promise((resolve, rejects) => {
    setTimeout(() => { resolve('Ok') } , 2000);
});

async function executaPromise() {
    console.log( await minhaPromise() );
    console.log( await minhaPromise() );

    console.log( await minhaPromise() );

}

executaPromise();