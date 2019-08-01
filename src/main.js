const minhaPromise = () => new Promise((resolve, rejects) => {
    setTimeout(() => { resolve('Ok') } , 2000);
});

minhaPromise().then(response => { 
    console.log(response);
});