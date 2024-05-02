import { useState } from "react";
import { ExploreTopBooks } from "../Utils/ExploreTopBooks";

export const AddEventPage = () => {

    const [eventName, setEventName] = useState('');
    const [occurrenceTime, setOccurrenceTime] = useState('');
    const [location, setLocation] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    // (e: React.ChangeEvent<HTMLInputElement>)   <- fix for .tsx file

    return (
        <div>
            <ExploreTopBooks/>
            <div className='p-5 container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h4 className='text-left'>Ürituse lisamine</h4>
                        <div className='card-body'>
                            <form>
                                {/* Event name */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Ürituse nimi:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='eventName'
                                        value={eventName}
                                        className='form-control'
                                        onChange={(e) => setEventName(e.target.value)}  //get the value from event object
                                    >
                                    </input>
                                </div>
                                {/* Occurence time */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Toimumisaeg:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='occurrenceTime'
                                        value={occurrenceTime}
                                        className='form-control'
                                        onChange={(e) => setOccurrenceTime(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {/* Location */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Koht:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='location'
                                        value={location}
                                        className='form-control'
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                {/* Additional info */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Lisainfo:</label>
                                    <input
                                        type='text'
                                        placeholder=''
                                        name='additionalInfo'
                                        value={additionalInfo}
                                        className='form-control'
                                        onChange={(e) => setAdditionalInfo(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-secondary'>Tagasi</button>
                                <button className='btn btn-success' style={{marginLeft: "10px"}}>Lisa</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}