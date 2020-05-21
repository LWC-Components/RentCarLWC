import { LightningElement, api, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';

export default class DetailCar extends NavigationMixin(LightningElement){
    @track car;
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener("eventdetails", this.sutUpDetails, this);
    }
     
    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    sutUpDetails(dogDtl){
        this.car = dogDtl;
        console.log('myDetails ', JSON.stringify(this.car,null,4))
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
    handelExpAdded() {
        console.log('in handel expAdded')
        //this.template.querySelector('lightning-tabset').activeTabValue = 'Item Three';
        this.tabActif= 'Item Three'
    }
}