interface cookSet{
    stoveAvail: boolean;
    shallowPanAvail: boolean;
    deepPanAvail: boolean;
    steamerAvail: boolean;
    utensils: boolean;
}

interface frySet{
    oilAvail: boolean;
}
interface boilSet{
    waterAvail: boolean;
}

class noodles implements cookSet, boilSet{
    constructor(
        public stoveAvail: boolean,
        public shallowPanAvail: boolean,
        public deepPanAvail: boolean,
        public steamerAvail: boolean,
        // removed utensils from here
        public waterAvail: boolean, // from boilSet
        public isDone: boolean // additional field
    ){}
}