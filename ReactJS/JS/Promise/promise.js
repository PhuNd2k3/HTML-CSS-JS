//pending
//fulfilled
//rejected

var promise = new Promise(
    //Excutor
    function(resolve, reject) {
        // Thanh cong -> resolve()
        // That bai -> reject()
        resolve([
            {
                id: '1'
            },
            {
                id: '2'
            }
        ])
        // reject('Co loi');
    }
);

promise
    .then(function(params) {
        console.log(params);
        return 1; //default undefined

    })
    .then(function(params) {
        console.log(params);
        return 2;
    })
    .then(function(params) {
        console.log(params);
    })



    .catch(function(errors) {
        console.log(errors);
    })
    // .finally(function() {
        // console.log('Done');
    // })

    //var promise = Promise.resolve()/reject()
    //Promise.all([promise1,promise2]) => return promise => .then (function([]){...})
