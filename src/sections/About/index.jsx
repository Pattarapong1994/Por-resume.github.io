import { data } from '../../contents/about'

const About = () => {
    return (
        <div className='space-y-4'>
            <div className='text-primaryContent font-medium'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}
export default About