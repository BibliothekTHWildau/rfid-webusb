'use strict';

const config = {
  debug: false,
  encoding: 'hex',
  reader: {
    id: "usb",
    filters: [{
      vendorId: 2737,
      productId: 2
    }],

    rxBufferSize: 280, //MR102,  
    keepalive: 300000
  }
}

export { config };