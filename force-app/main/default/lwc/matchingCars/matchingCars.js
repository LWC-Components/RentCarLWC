import { LightningElement, api,wire, track } from 'lwc';
import getMatchingCars from '@salesforce/apex/CarType.allMatchingCars'


export default class MatchingCars extends LightningElement {

    @api selectedTypeCar;
    @track cars;



    @wire(getMatchingCars, { carType: '$selectedTypeCar' })
    matchingCars({ data, error }) {
        if (data) {
            console.log('allCars : ',JSON.stringify(data,null,4))
            this.cars = data;
        } else if (error) {
            console.log(error)
        }
    }

}