import { LightningElement, api } from 'lwc';
import creationExprerience from '@salesforce/apex/CarType.creationExprerience';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class CarExperience extends LightningElement {

    @api carId;
    title;
    experience;
    addExperienceHandler() {
        creationExprerience({ carId: this.carId, title: this.title, experience: this.experience })
            .catch(error => {
                console.log('il y une errur dans apex ', error);
            });
        const selectedEvent = new CustomEvent("exp");
        console.log('element dispatched');
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
        this.dispatchEvent(new ShowToastEvent({
            title: 'yopaa',
            message: 'Your experience was addes successfully',
            variant: 'success'
        }));
    }

    handleNameChange(event) {
        this.title = event.target.value;
    }
    handleExperienceChange(event) {
        this.experience = event.target.value;
    }



}