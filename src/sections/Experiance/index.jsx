import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Experiance = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({})

    return (
        <div>
            <div className='text-primaryContent font-medium'>Experiance</div>
            <div
                className={`grid grid-cols-[25%_75%] px-2 rounded-md py-6 transition-all ${isMouseEnter['exp1'] ? " bg-primaryBase" : ""} `} onMouseEnter={() => setIsMouseEnter({ 'exp1': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp1': false })}
            >
                <div>
                    <div>
                        <span className={`'text-sm' ${isMouseEnter['exp1'] ? " text-primaryContent" : ""}`}>2022-2023</span>
                    </div>
                    <img src="https://fastly.picsum.photos/id/885/200/200.jpg?hmac=RQ5YecoOv-yZMfoibCEw6EjqLgnpWvSrGEQmkcoAdaw" className={`w-5/6 rounded-md  border-primarySubContent ${isMouseEnter['exp1'] ? " border-primaryContent border-2" : ""}`} />
                </div>
                <div className='grid gap-y-4'>
                    <div className={`text-primaryContent ${isMouseEnter['exp1'] ? " text-primaryTitle" : ""}`}>EZ Commerce</div>
                    <div>
                        <FontAwesomeIcon className={`flex gap-4 text-xl ${isMouseEnter['exp1'] ? " text-primaryContent" : ""}`} icon={faGithub} />
                    </div>
                    <div className={`'text-sm' ${isMouseEnter['exp1'] ? " text-primaryContent" : ""}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusamus eius libero odio nulla modi quos, obcaecati placeat voluptas maxime nemo a dolor, rerum sunt atque quisquam adipisci perspiciatis nihil.
                    </div>
                    <div className='flex gap-4 text-sm'>
                        <div className={`text-primaryContent bg-primarySubContent px-2 py-1 rounded-md  ${isMouseEnter['exp1'] ? "text-primarySubContent bg-primaryContent" : ""}`}>React</div>
                        <div className={`text-primaryContent bg-primarySubContent px-2 py-1 rounded-md  ${isMouseEnter['exp1'] ? "text-primarySubContent bg-primaryContent" : ""}`}>Tailwind</div>
                    </div>
                </div>
            </div>
            <div
                className={`grid grid-cols-[25%_75%] px-2 rounded-md py-6 transition-all ${isMouseEnter['exp2'] ? " bg-primaryBase" : ""} `} onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                    <div>
                        <span className={`'text-sm' ${isMouseEnter['exp2'] ? " text-primaryContent" : ""}`}>2022-2023</span>
                    </div>
                    <img src="https://fastly.picsum.photos/id/885/200/200.jpg?hmac=RQ5YecoOv-yZMfoibCEw6EjqLgnpWvSrGEQmkcoAdaw" className={`w-5/6 rounded-md  border-primarySubContent ${isMouseEnter['exp2'] ? " border-primaryContent border-2" : ""}`} />
                </div>
                <div className='grid gap-y-4'>
                    <div className={`text-primaryContent ${isMouseEnter['exp2'] ? " text-primaryTitle" : ""}`}>EZ Commerce</div>
                    <div>
                        <FontAwesomeIcon className={`flex gap-4 text-xl ${isMouseEnter['exp2'] ? " text-primaryContent" : ""}`} icon={faGithub} />
                    </div>
                    <div className={`'text-sm' ${isMouseEnter['exp2'] ? " text-primaryContent" : ""}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure accusamus eius libero odio nulla modi quos, obcaecati placeat voluptas maxime nemo a dolor, rerum sunt atque quisquam adipisci perspiciatis nihil.
                    </div>
                    <div className='flex gap-4 text-sm'>
                        <div className={`text-primaryContent bg-primarySubContent px-2 py-1 rounded-md  ${isMouseEnter['exp2'] ? "text-primarySubContent bg-primaryContent" : ""}`}>React</div>
                        <div className={`text-primaryContent bg-primarySubContent px-2 py-1 rounded-md  ${isMouseEnter['exp2'] ? "text-primarySubContent bg-primaryContent" : ""}`}>Tailwind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiance