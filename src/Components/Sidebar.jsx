import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { MyContext } from './Context'
import { Link } from 'react-router'


const sidebar = "w-[20vw] max-w-[100px] sm:w-[100px] sm:max-w-[100px] md:w-[130px] md:max-w-[130px] lg:w-[160px] lg:max-w-[160px]"
const mainLogo = "w-full h-[100%] min-h-[50px] max-h-[100px] sm:h-[110px] sm:max-h-[110px] md:h-[140px] md:max-h-[140px] lg:h-[160px] lg:max-h-[160px]"
const primaryLi = "bg-[rgba(248,145,23,.8)] hover:bg-[rgba(0,0,0,.8)] text-white hover:text-[#faaa47] border-b-[1px] border-b-transparent last:border-b-0 bg-clip-padding first:rounded-t-[5px] last:rounded-b-[5px] sm:first:rounded-t-[10px] sm:last:rounded-b-[10px] relative"
const primaryLiLink = "block h-[35px] md:h-[40px] lg:h-[49px] flex justify-center items-center font-nobile italic font-bold text-[clamp(10px,2vw,14px)] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[38px] lg:leading-[49px]"

const childLi = "text-[#fcdaa1] text-white hover:text-[#faaa47] font-nobile font-bold text-[clamp(8px,4vw,10px)] sm:text-[10px] md:text-[14px] lg:text-[16px] leading-[14px] md:leading-[18px] lg:leading-[24px] pl-[10px] md:pl-[15px] h-[18px] md:h-[24px] mb-1 last:mb-0 "

const Sidebar = () => {
    const context = useContext(MyContext)

    return (
        <div>
            <div className={sidebar}>
                <img className={mainLogo} src={logo} />

                <ul className='w-full flex flex-col mt-4 sm:mt-6 md:mt-10 '>
                    <li className={primaryLi}>
                        <Link className={primaryLiLink} to='/'>Home</Link>
                    </li>
                    <li className={primaryLi}



                        onMouseEnter={(e) => {
                            context.setShowChildMenu(true)
                        }}

                        onMouseLeave={(e) => {
                            context.setShowChildMenu(false)
                        }}

                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <Link to='/menu' className={primaryLiLink}>Menu</Link>


                        <ul className={`w-[clamp(80px,30vw,100px)] sm:w-[100px] md:w-[140px] lg:w-[160px] ${context.showChildMenu ? 'flex ' : 'hidden'} flex-col absolute top-0 left-full bg-[rgba(0,0,0,.8)] py-[10px] md:py-[15px] rounded-[5px] z-1000`}

                            onMouseLeave={(e) => {
                                context.setShowChildMenu(false)
                            }}
                            onClick={(e) => {
                                context.setShowChildMenu(false)
                            }}
                        >
                            <li className={childLi}>
                                <Link to='/menu'>Lorem Ipsum</Link>
                            </li>
                            <li className={childLi}>
                                <Link to='/menu'>Dolor Sit Amet</Link>
                            </li>
                            <li className={childLi}>
                                <Link to='/menu'>Nulla Pretium</Link>
                            </li>
                            <li className={childLi}>
                                <Link to='/menu'>Curabitur</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={primaryLi}>
                        <Link to='/blog' className={primaryLiLink}>Blog</Link>
                    </li>
                    <li className={primaryLi}>
                        <Link to='/about' className={primaryLiLink}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar