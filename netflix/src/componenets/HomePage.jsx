import netflix from '../../assets/netflix.jpg'

function HomePage (){
    return(
        <main className=''>
            <section className=''>
                <div className='object-fill absolute top-0 -z-10 w-full h-screen bg-home-picture'>
                </div>
                <div className='h-[39.6rem] flex flex-col justify-center bg-gradient-to-r from-black to-transparent-500'>
                    <div className='flex flex-col justify-between h-[20%] pl-7'>
                        <p className='mb-2 text-6xl font-bold text-neutral-200'>See What's next.</p>
                        <p className='my-2 text-xl text-neutral-100 font-extralight'>
                            WATCH ANYWHERE. CANCEL ANYTIME.
                        </p>
                        <button className="w-[15%] py-2 rounded my-1 bg-red-700 hover:bg-red-900 text-neutral-300">
                            <p>
                                JOIN FREE FOR ONE MONTH
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage;