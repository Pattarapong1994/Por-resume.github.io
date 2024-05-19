import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <a href="https://github.com/Pattarapong1994" target="_blank">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" >
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faFacebook} />
            </a>
        </div>
    )
}
export default Contact