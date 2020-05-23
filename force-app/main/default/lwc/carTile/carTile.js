import { LightningElement, api, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
export default class CarTile extends LightningElement {
    @api car;
    @wire(CurrentPageReference) pageRef;

 
    displayDetailCar(){
        fireEvent(this.pageRef, "eventdetails", this.car );
    }

    
}