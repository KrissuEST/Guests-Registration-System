import { useState } from "react";
import { ExploreTopBooks } from "../Utils/ExploreTopBooks";

export const ParticipantInfoPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [personalIdNr, setPersonalIdNr] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [participantAdditionalInfo, setParticipantAdditionalInfo] = useState('');

    // (e: React.ChangeEvent<HTMLInputElement>)   <- fix for .tsx file

    return (
        <div>
            <ExploreTopBooks/>
            <div className='p-5 container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h4 className='text-left'>Osavõtja info</h4>
                        <div className='card-body'>
                            <form>
                                {/* First name */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Eesnimi:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='firstName'
                                        value={firstName}
                                        className='form-control'
                                        onChange={(e) => setFirstName(e.target.value)}  //get the value from event object
                                    >
                                    </input>
                                </div>
                                {/* Second name */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Perenimi:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='lastName'
                                        value={lastName}
                                        className='form-control'
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {/* Personal ID number */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Isikukood:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='personalIdNr'
                                        value={personalIdNr}
                                        className='form-control'
                                        onChange={(e) => setPersonalIdNr(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {/* Personal ID number */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Maksmisviis:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='paymentMethod'
                                        value={paymentMethod}
                                        className='form-control'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {/* Additional info */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Lisainfo:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='participantAdditionalInfo'
                                        value={participantAdditionalInfo}
                                        className='form-control'
                                        onChange={(e) => setParticipantAdditionalInfo(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-secondary'>Tagasi</button>
                                <button className='btn btn-success' style={{marginLeft: "10px"}}>Salvesta</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}