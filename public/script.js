if("serviceWorker" in navigator){
    navigator.serviceWorker.register('sworker.js').then(registration=>{
        console.log('service worker regesterd');
        console.log(registration);
    }).catch(error=>{
        console.log('service worker error');
        console.log(error);
    })
}else{
    console.log('service worker not working');
}