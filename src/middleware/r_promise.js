export default (store) => (next) => (action) => {
    //code goes here

    if(!action.payload || !action.payload.then){
        return next(action);
    };

    action.payload.then((response) => {
        const newAction = {
            ...action,
            payload: response
        };


        store.dispatch(newAction);
    });

    return action.payload;
};


// function (store) {
//     return function (next){
//         return function (action) {
//             //code goes here
//         }
//     }
// }