import logo from "../../assets/logo.png"

function Navbar (){
    return(
        <nav className="">
            <div className="bg-gradient-to-r from-black to-transparent-500">
                <div className="h-20 w-4/5 m-auto">
                    <div className="flex justify-between content-center pt-5">
                        <img className="h-10" src={logo} alt="Netflix logo" />
                        <button className="w-[9%] rounded bg-red-700 hover:bg-red-900 text-neutral-300">
                            <p>
                                sign in
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar