import React from 'react'
import { Link } from 'react-router'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import icons from "../assets/icons.png"



const footerColWrap = "bg-[rgba(253,246,227,.4)] rounded-t-[10px] overflow-hidden grid grid-cols-2 xxs:grid-cols-2 md:grid-cols-4"

const footerCol = ` text-center md:text-left
p-[5px] xxs:px-[15px] xxs:py-[10px] xs:px-[20px] xs:py-[10px] md:p-[20px]
border-r-[1px] border-r-[rgba(241,215,146,1)] 
border-b-[1px] border-b-[rgba(241,215,146,1)] 

[&:nth-child(2n)]:border-r-0
xxs:[&:nth-child(2n)]:border-r-0 
md:[&:nth-child(4n)]:border-r-0 
md:[&:nth-child(2n)]:border-r-[1px]`

const footerH4 = `font-bold 
text-[clamp(10px,4vw,14px)] xxs:text-[clamp(14px,3vw,16px)] sm:text-[16px] 
leading-[24px] text-[#f9a740] italic font-nobile`

const footerUl = `font-bold text-[clamp(8px,3.5vw,12px)] xxs:text-[clamp(12px,3vw,14px)] sm:text-[14px] leading-[24px] text-[#baad85] font-quattro 

mt-[6px] md:mt-2
w-full flex flex-col items-center md:items-start`

const footerLi = ""
const footerLink = "flex items-center"

const footerBottomBar = `flex flex-col-reverse xs:flex-row  justify-between items-center gap-5 
bg-[rgba(253,246,227,.4)] rounded-b-[10px] overflow-hidden
p-[5px] pt-[15px]
xs:px-[20px] xs:py-[3px] xs:pt-0
sm:p-[20px] sm:py-[3px] sm:pt-0
md:p-[20px] md:py-[3px] md:pt-0
lg:px-[20px] lg:py-[3px] lg:pt-0
text-[#baac83] font-quattro text-[clamp(7px,3.8vw,12px)] xs:text-[12px] leading-[38px]`
const footerSocialUL = 'h-full flex items-center gap-[clamp(12px,4vw,20px)]  xs:gap-3 shrink-0 '
const footerSocialIcon = "w-[20px] h-[18px] flex-1"

const Footer = () => {
    return (
        <div className='mt-5 xxs:mt-5 md:mt-8 lg:mt-10 mb-2 xxs:mb-5 md:mb-8 lg:mb-10 '>

            <div className={footerColWrap}>
                <div className={footerCol}>
                    <h4 className={footerH4}>Lorem Ipsum</h4>

                    <ul className={footerUl}>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'>
                            <MdOutlineKeyboardArrowRight />
                            

 Dolor Sit Amet</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'>
                            <MdOutlineKeyboardArrowRight />
                            
                            Lorem Ipsum</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Nulla Pretium</Link>
                        </li>
                    </ul>
                </div>

                <div className={footerCol}>
                    <h4 className={footerH4}>Dolor Sit Amet</h4>

                    <ul className={footerUl}>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Dolor Sit Amet</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Lorem Ipsum</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Nulla Pretium</Link>
                        </li>
                    </ul>
                </div>

                <div className={footerCol}>
                    <h4 className={footerH4}>Nulla Pretium</h4>

                    <ul className={footerUl}>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Dolor Sit Amet</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Lorem Ipsum</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Nulla Pretium</Link>
                        </li>
                    </ul>
                </div>
                <div className={footerCol}>
                    <h4 className={footerH4}>Curabitur</h4>

                    <ul className={footerUl}>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Dolor Sit Amet</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Lorem Ipsum</Link>
                        </li>
                        <li className={footerLi}>
                            <Link className={footerLink} to='#'><MdOutlineKeyboardArrowRight />
                            
                            Nulla Pretium</Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={footerBottomBar}>
                <p>Copyright {new Date().getFullYear()} Sushi Hanii. All Rights Reserved.</p>

                <ul className={footerSocialUL}>
                    <li>
                        <Link to='#'>
                            <div className={`${footerSocialIcon} hover:bg-[position:20px_0px]`} style={{
                                backgroundImage: `url(${icons})`,
                            }}></div>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <div className={`${footerSocialIcon} bg-[position:0px_-28px] hover:bg-[position:20px_-28px]`} style={{
                                backgroundImage: `url(${icons})`
                            }}></div>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <div className={`${footerSocialIcon} bg-[position:0px_-57px] hover:bg-[position:20px_-57px]`} style={{
                                backgroundImage: `url(${icons})`
                            }}></div>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <div className={`${footerSocialIcon} bg-[position:0px_-85px] hover:bg-[position:20px_-85px]`} style={{
                                backgroundImage: `url(${icons})`
                            }}></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer