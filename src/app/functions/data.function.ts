import { Location } from '../interfaces/location.interface';

export class DataFunction{
    public static Data: DataFunction;

    public locations: Location[];

    constructor(){
        this.locations = [];
        DataFunction.Data = DataFunction.Data?DataFunction.Data:this;
        return DataFunction.Data;
    }

}