import { Link } from "react-router-dom";

export const Heros = () => {
    return (
        <div>
            <div className='p-5 d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                Library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Tulevased üritused</h1>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Id</th>
                                        <th scope='col'>Event name</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Participants</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <th>Sünnipäev</th>
                                        <th>21.03.2024</th>
                                        <th>OSAVÕTJAD X</th>
                                    </tr>
                                </tbody>
                            </table>
                            <Link type='button' className='btn main-color btn-lg text-white' to='/addEvent'>
                                Lisa üritus
                            </Link>
                        </div>
                    </div>
                    {/* <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div> */}
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Tulevased üritused</h1>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Id</th>
                                        <th scope='col'>Event name</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Participants</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    this.state.
                                    <tr>
                                        <th>1</th>
                                        <th>Sünnipäev</th>
                                        <th>21.03.2024</th>
                                        <th>OSAVÕTJAD X</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Heros*/}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have you been reading?</h1>
                            <p className='lead'>
                                Library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most accurate book selection possible 
                                for our Luv 2 Read students! We are diligent about our book selection 
                                and our books are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}