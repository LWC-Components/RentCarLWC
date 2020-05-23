import { LightningElement, wire, api, track } from 'lwc';
import ViewExperience from '@salesforce/apex/CarType.ViewExperience';
export default class DetailExperience extends LightningElement {
    @api experiences;
    // @track experiences;

    // @wire(ViewExperience, { carId: this.carId })
    // wiredExperiece({ error, data }) {
    //     if (data) {
    //         this.experiences = data;
    //         console.log('experiences = ', this.experiences);
    //     } else if (error) {
    //         console.log('error= ', error);
    //     }
    
    // }
    
    
    
}