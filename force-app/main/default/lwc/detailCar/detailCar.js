import { LightningElement, api, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';
import ViewExperience from '@salesforce/apex/CarType.ViewExperience';

export default class DetailCar extends NavigationMixin(LightningElement) {
    @track car;
    @wire(CurrentPageReference) pageRef;
    @track experiences;

    connectedCallback() {
        registerListener("eventdetails", this.sutUpDetails, this);
    }
     
    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    sutUpDetails(dogDtl) {
        console.log('in sutupDetails')
        this.car = dogDtl;
        console.log('myDetails ', JSON.stringify(this.car, null, 4))
    }
    openDetail() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "view",
                recordId: this.car.Id,
                objectApiName: "Car__c"
            }
        });
    }

    @track tabActif
    handelExpAdded(event) {
        ViewExperience({ carId: this.car.Id })
        .then(data => {
            this.experiences = data;
            console.log('experiences = ', this.experiences);
        }).catch(error => {
            console.log('error= ', error);

        })
        console.log('in handel expAdded')
        this.tabActif = 'Item Three';
       
    }

    

}