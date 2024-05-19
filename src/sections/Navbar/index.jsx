import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
        <div>
            <div className='flex flex-col gap-3 font-semibold'>
                <div>
                    <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faCaretRight} />
                    About
                </div>
                <div>Experience</div>
                <div>Project</div>
                <div>Article</div>
                <div>Certification</div>
            </div>
        </div>
    )
}
export default Navbar