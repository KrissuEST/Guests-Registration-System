class ParticipantModel {
    id: number;
    firstName: string;
    lastName: string;
    personalIdNr: bigint;
    paymentMethod: string;
    event_id: number;
    additionalInfo: string;

    constructor (id: number, firstName: string, lastName: string, 
        personalIdNr: bigint, paymentMethod: string, event_id: number, 
        additionalInfo: string) {

            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.personalIdNr = personalIdNr;
            this.paymentMethod = paymentMethod;
            this.event_id = event_id;
            this.additionalInfo = additionalInfo;
    }
}

export default ParticipantModel;