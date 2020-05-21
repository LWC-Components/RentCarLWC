import { LightningElement, api, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
export default class CarTile extends LightningElement {
    @api car;
    @wire(CurrentPageReference) pageRef;

    displayDetailCar() {
        console.log('this.car.Id   = ', this.car.Id)
        // selectedEvent = new CustomEvent('carTileSelected', { detail: this.car.Id });
        // console.log('this tile ')
        
        // // Dispatches the event.
        // this.dispatchEvent(selectedEvent);
    }
    displayDetailCar(){
        fireEvent(this.pageRef, "eventdetails", this.car );
    }

    
}