public with sharing class CarType {
    @AuraEnabled(cacheable=true)
    public static list<Car_type__c> getCarTypes(){
        return [SELECT id,Name FROM Car_type__c];
    }

    @AuraEnabled(cacheable =true)
    public static List<car__c> allMatchingCars(string carType){
        string query = 'SELECT Picture__c,id,Name,Contact__r.Name,'+
         'Car_Type__r.Name, Build_Year__c, Per_Day_Rent__c, Mileage__c, Geolocation__Latitude__s, Geolocation__Longitude__s FROM car__c';
        if (!String.ISBLANK(carType)){
            query+= ' WHERE Car_Type__c =: carType';
        }
        System.debug('----- '+query);
        return Database.query(query);
    }

    @AuraEnabled
    public static void creationExprerience(string carId, string title, string experience){
        insert (new Car_Experience__c(Name=title,car__c=carId, Experience__c =experience));
    }
    @AuraEnabled(cacheable=true)
    public static list<Car_Experience__c>  ViewExperience(string carId ){//SmallPhotoUrl, FullPhotoUrl
        return [SELECT Id, Car__c, CreatedBy.Name,CreatedBy.SmallPhotoUrl, CreatedDate, Name FROM Car_Experience__c
                Where car__c =:carId ];
    }
    
}
