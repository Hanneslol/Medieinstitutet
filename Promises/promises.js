Promise(() => { })

Promises((resolve, reject) => {

    if (..) {

        resolve(),

    else {

            reject(),

    }
    }



})

Promise kör kod som tar lång tid

vänta tills vi får ett resultat

resultat = resolve eller reject



const p = new Promise((resolve, reject) => {

    resolve({..error..})
    reject({ ...})
});

p.then((weather) => { })
p.then((weather) => { }, () => { error })


fetch


Get, Post, Put, Delete


fetch(url): Promises < response >


    fetch("http....")

        .then((response) =>
            // { automatisk return utan måsvinge

            response.json(); ---> Promise < any >


                then.((data))=> { });
        })