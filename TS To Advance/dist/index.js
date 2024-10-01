"use strict";
class noodles {
    constructor(stoveAvail, shallowPanAvail, deepPanAvail, steamerAvail, 
    // removed utensils from here
    waterAvail, // from boilSet
    isDone // additional field
    ) {
        this.stoveAvail = stoveAvail;
        this.shallowPanAvail = shallowPanAvail;
        this.deepPanAvail = deepPanAvail;
        this.steamerAvail = steamerAvail;
        this.waterAvail = waterAvail;
        this.isDone = isDone;
    }
}
