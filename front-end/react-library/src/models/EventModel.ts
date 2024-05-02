class EventModel {
    id: number;
    eventName: string;
    occurrenceTime: Date;
    location: string;
    additionalInfo: string;

    constructor (id: number, eventName: string, occurrenceTime: Date, 
        location: string, additionalInfo: string) {
            this.id = id;
            this.eventName = eventName;
            this.occurrenceTime = occurrenceTime;
            this.location = location;
            this.additionalInfo = additionalInfo;
    }
}

export default EventModel;