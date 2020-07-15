// Copyright (c) 2020. Jonathan. All Rights Reserved.
'use strict';

export default class Result {
    constructor (error = -1, errorMsg = "Unknown Error", payload = {}) {
        this.error = error;
        this.errorMsg = errorMsg;
        this.payload = payload;
    }

    // If everything goes well
    ok() {
        this.error = 0;
        this.errorMsg = "";
        return this;
    }

    // Serialize the string 
    serialize() {

        return JSON.stringify( this ); 
    }
}
