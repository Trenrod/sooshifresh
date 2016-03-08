// Globaler Dispatcher zum registrieren des DataBlockStore
var AppDispatcher = require('../dispatcher/AppDispatcher');
// Async Event Verarbeitung... 
var EventEmitter = require('events').EventEmitter;
// Ermöglicht Zuweisungen mehrer Objekte zu einem
var assign = require('object-assign');

// Cache Speicher
var dataBlock = { blockA : "DATA_A", blockB : "DATA_B" };

// Private Block
//Updated den DataBlock
function setDataBlock(receivedDataBlock) {
	dataBlock = receivedDataBlock; 
}

function emitChange() {
	DataBlockStore.emit('change');
}

// Public Block
// Anhand von Events können sich Komponenten triggern lassen wenn sich Daten geändert haben
// 
var DataBlockStore = assign( 
	{ }, 
	// Ermöglicht Event handling
	EventEmitter.prototype,
	{
		// Registriert Listeners
		addChangeListener: function (callback) {
			this.on('change', callback);  
		},
		
		// Löst registrierung von Listeners auf
		removeChangeListener: function (callback) {
			this.removeListener('change', callback);  
		},
		
		getDataBlock: function () {
			return dataBlock;
		}
	}
);

// Filter welche Actions dieser Store interessiert ist
function handleAction(action) {  
	if (action.type === 'receive_data') {
		setDataBlock(action.dataBlock);
		emitChange();  
	}
}

// Registriert den Store an den Dispatcher
DataBlockStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = DataBlockStore;
