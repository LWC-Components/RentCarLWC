import { LightningElement, wire, api, track } from 'lwc';
import getCarTypes from '@salesforce/apex/CarType.getCarTypes';
import { NavigationMixin } from 'lightning/navigation';

export default class FilterCars extends NavigationMixin(LightningElement) {

    error;
    @track selectOptions = [{ label: 'All cars', value: '' }];
    carType = '';

    handleChangeCarType(e) {
        this.carType = e.target.value;
        console.log('type car selected  = ', this.carType)
    }

    @wire(getCarTypes)
    wiredGetCarTypes({ error, data }) {
        if (data) {
            console.log('my data ', JSON.stringify(data))
            for (const type of data) {
                const option = {
                    label: type.Name,
                    value: type.Id
                }
                this.selectOptions = [...this.selectOptions, option];
            }
        } else if (error) {
            // Handle error
            console.log('==============Error  ');
            console.log(error);
        }
    };

    navigateToCarType() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Car_Type__c',
                actionName: 'new'
            },
        });
    }


}