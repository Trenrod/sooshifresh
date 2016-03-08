var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveData(dataBlock){
    var action = {
        type : "receive_data",
        dataBlock : dataBlock  
    };    
    AppDispatcher.dispatch(action);
}

module.exports = {
    receiveData : receiveData
};
