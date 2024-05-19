import Contact from "../Contact"
import Header from "../Header"
import Navbar from "../Navbar"

const LeftSection = () => {
    return (
            <div className='px-5 mb-14 lg:mb-0'>
                <div className='sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[85vh]'>
                    <Header />
                    <Navbar />
                    <Contact />
                </div>
            </div>
    )
}

export default LeftSection