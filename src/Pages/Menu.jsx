import React, { useContext, useState } from 'react'
import bgBody from '../assets/bg-body.png'
import bgBody2 from '../assets/bg-body2.png'


import { Link } from 'react-router'
import sushi from '../assets/sushi.png'
import sushi1 from '../assets/sushi1.png'
import sushi2 from '../assets/sushi2.png'
import sushi3 from '../assets/sushi3.png'
import sushi4 from '../assets/sushi4.png'
import sushi5 from '../assets/sushi5.png'
import sushi6 from '../assets/sushi6.png'
import sushi7 from '../assets/sushi7.png'
import sushi8 from '../assets/sushi8.png'
import sushi9 from '../assets/sushi9.png'
import sushi10 from '../assets/sushi10.png'
import ribbonPng from '../assets/ribbon.png'
import frames from '../assets/frames.png'
import bgPage from '../assets/bg-page.png'
import Footer from '../Components/Footer.jsx'
import context from '../App.jsx'

import { MyContext } from '../Components/Context.js'
import Sidebar from '../Components/Sidebar.jsx'
import menuHeader from '../assets/bg-menu-page-header.png'





const fourColumn = 'relative'

const fourColumnImg = 'w-full'
const fourColumnLink = 'group'

const fourColumnTextWrap = `text-center`
const fourColumnHeading = `text-[#f9900c] text-[clamp(11px,4.5vw,18px)] xxs:text-[clamp(18px,2.8vw,20px)] md:text-[20px] font-nobile font-[600] italic leading-[24px]`
const fourColumnParagraph = `text-[#aea588] font-[600] italic font-nobile leading-[16px]
text-[clamp(9px,3.3vw,13px)] xxs:text-[clamp(13px,2vw,15px)] md:text-[15px]`



const Menu = () => {

    const context = useContext(MyContext)

    return (
        <div className='w-full flex flex-col items-center'>

            <div className='w-full lg:w-[1000px] px-[15px] sm:px-[30px] bg-no-repeat bg-[length:70%_150px] sm:bg-[length:70%_220px] md:bg-[length:60%_260px] lg:bg-[length:591px_260px] bg-[position:0_9px] sm:bg-[position:0_3px] md:bg-[position:0_0] mt-[clamp(-2px,calc(-13.37px+5.702vw),15px)] xs:mt-[clamp(0px,calc(-10.79px+2.158vw),3px)] sm:mt-[clamp(2.5px,.6vw,4px)] md:mt-[clamp(-3px,calc(-12.04px+1.176vw),0px)] lg:mt-[2px]'
                style={{
                    backgroundImage: `url(${bgPage})`,
                }}
            >

                <div className='mt-5.5'>
                    {/* heder */}
                    <div className='relative'
                    >



                        <Sidebar />


                        {/* Menu header title bar */}
                        <div className=' absolute 
                        top-[clamp(55px,calc(101.12px-11.558vw),78px)] 
                        xxs:top-[clamp(37px,10vw,54px)] 
                        xs:top-[clamp(0px,calc(252.88px-39.577vw),55px)] 
                        sm:top-[17px] md:top-[clamp(0px,calc(320.94px-31.372vw),80px)] lg:top-20
                        
                        right-0 bg-[length:100%_100%]
                        w-[clamp(120px,63vw,260px)]
                        h-[clamp(130px,45vw,180px)]
                        xxs:w-[clamp(280px,70vw,470px)]
                        xxs:h-[clamp(200px,40vw,255px)]
                        sm:w-[clamp(450px,71vw,560px)] sm:h-[255px] 
                        md:w-[clamp(530px,70vw,711px)] md:h-[clamp(260px,34vw,340px)] lg:w-[711px] lg:h-[340px] ' style={{
                            backgroundImage: `url(${menuHeader})`
                        }}>
                            
                            <div className='relative 
                            top-[clamp(65px,25vw,100px)]
                            xxs:top-[clamp(115px,23vw,147px)]
                            sm:top-[clamp(147px,20vw,200px)] lg:top-[200px] 
                            left-[clamp(5px,2.5vw,10px)]
                            xxs:left-[clamp(15px,3.2vw,20px)]
                            sm:left-[clamp(20px,3.3vw,25px)]
                            md:left-[clamp(25px,3vw,30px)] lg:left-[30px]'>

                                {/* 200 text-[8px] */}
                                <h1 className='inline-block text-[#fa8f0d]
                                text-[clamp(8px,3.9vw,12px)]
                                xxs:text-[clamp(18px,3.7vw,24px)] 
                                sm:text-[clamp(24px,3.7vw,28px)] md:text-[clamp(28px,3.5vw,35px)] lg:text-[35px]
                                leading-[10px]
                                 xxs:leading-[30px] md:leading-[36px] font-bold italic m-0 [text-shadow:1px_1px_#fff9eb]
                            font-nobile'>Lorem ipsum</h1>

                                
                                <div className='
                                w-[clamp(55px,29vw,112px)]
                                xxs:w-[clamp(125px,30vw,190px)]
                                sm:w-[clamp(190px,30vw,240px)]
                                md:w-[clamp(210px,30vw,310px)] lg:w-[310px] text-[#aea588]
                                text-[clamp(5px,2vw,8px)]
                                xxs:text-[clamp(7px,1.8vw,11px)]
                                sm:text-[11px]
                                md:text-[clamp(11px,1.5vw,14px)] lg:text-[14px]
                                leading-[clamp(6px,2.4vw,10px)]
                                xxs:leading-[clamp(12px,2.5vw,16px)]
                                sm:leading-[clamp(16px,2.5vw,20px)]
                                md:leading-[clamp(20px,2.5vw,24px)] lg:leading-[24px] italic font-bold font-nobile '>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla ac purus iaculis quis fermentum lacus sodales</p>
                                </div>
                            </div>
                        </div>




                    </div>
                    {/* header */}
                </div>
            </div>

            {/* main */}

            <div className='w-full  min-h-[540px] flex justify-center items-start '>

                <div className='w-full lg:w-[1000px] px-[15px] sm:px-[30px]'>

                    {/* four column */}
                    <div className='mt-5 xxs:mt-5 md:mt-8 lg:mt-10 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 xs:gap-5'>
                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi3}></img>


                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi2}></img>


                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi5}></img>


                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>


                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi4}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi6}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi4}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi3}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi1}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi1}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi2}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi5}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/menu' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi4}></img>

                                <div className={fourColumnTextWrap}>
                                    <h3 className={fourColumnHeading} >
                                        Lorem Ipsum
                                    </h3>
                                    <p className={fourColumnParagraph}>Dolor sit amet</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    {/* footer */}
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Menu