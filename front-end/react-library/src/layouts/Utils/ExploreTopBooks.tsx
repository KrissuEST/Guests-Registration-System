
export const ExploreTopBooks = () => {
    return(
         <div className='bg-dark'>  {/* header - välja */}
            <div className='row align-items-center'>
                <div className='col-lg-3 p-3'>
                    <h3 className='display-6 text-white'>
                        Ürituste lisamine
                    </h3>
                    {/* <p className='lead'>
                        If you cannot find what you are looking for, 
                        send our library admin's a personal message!
                    </p> */}
                    {/* <div className='d-grid gap-2 justify-content-md-start mb-4 mb-lg-3'>
                        <a className='btn main-color btn-lg text-white' href='#'>
                            Sign up
                        </a>
                    </div> */}
                </div>
                <div className='col-lg-4 offset-lg-1 shadow-lg libled-image'></div> 
            </div>
            {/* <div className='container-fluid py-5 text-white
                d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                    <p className='col-md-8 fs-4'>Where would you like to go next?</p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/search'>
                        Explore top books
                    </Link>
                </div>
            </div> */}
        </div>
    );
}