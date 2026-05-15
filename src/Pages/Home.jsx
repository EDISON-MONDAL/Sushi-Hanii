import React, { useContext, useState } from 'react'
import bgBody from '../assets/bg-body.png'
import bgBody2 from '../assets/bg-body2.png'


import { Link } from 'react-router'
import sushi from '../assets/sushi.png'
import sushi1 from '../assets/sushi1.png'
import sushi2 from '../assets/sushi2.png'
import sushi3 from '../assets/sushi3.png'
import sushi4 from '../assets/sushi4.png'
import sushi9 from '../assets/sushi9.png'
import sushi10 from '../assets/sushi10.png'
import ribbonPng from '../assets/ribbon.png'
import frames from '../assets/frames.png'
import bgPage from '../assets/bg-page.png'
import Footer from '../Components/Footer'
import context from '../App.jsx'

import { MyContext } from '../Components/Context.js'
import Sidebar from '../Components/Sidebar.jsx'



const frameText = "w-full flex-1  px-[clamp(8px,6vw,20px)] sm:px-5 md:px-7 lg:px-10 sm:py-2 py-2 md:py-3 first:pr-0 last:pl-0 text-[#aea588] italic font-bold text-[clamp(5px,2vw,10px)] sm:text-[10px] md:text-[11px] lg:text-[12px] leading-[clamp(10px,4vw,18px)] sm:leading-[18px] md:leading-[18px] lg:leading-[24px] tracking-[1px] font-[Nobile] text-shadow-[1px_2px_#fdf8f8]"



const twoColumn = `h-[clamp(100px,38vw,150px)] xxs:h-[clamp(150px,27vw,170px)] sm:h-[clamp(150px,22vw,170px)] md:h-[clamp(170px,20vw,203px)] lg:h-[203px] sm:flex-1  

bg-[position:0_clamp(-113px,-28.2vw,-77px)]
xxs:bg-[position:0_clamp(-128px,-20vw,-112px)]
sm:bg-[position:0_clamp(-127px,-16.5vw,-115px)] md:bg-[position:0_clamp(-155px,-15vw,-127px)] lg:bg-[position:0_-155px] 

bg-no-repeat 
bg-[length:205.5%_clamp(177px,65.6vw,262px)]
xxs:bg-[length:205.5%_clamp(262px,46.5vw,298px)]
sm:bg-[length:205.5%_clamp(266px,38.5vw,296px)] md:bg-[length:205.5%_clamp(296px,35vw,360px)] lg:bg-[length:205.5%_360px]`


const twoColumnInnerDiv = 'flex gap-0 text-[#7a7257] font-[500] text-[clamp(5px,2.3vw,10px)] xxs:text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(8px,1.3vw,10px)] md:text-[clamp(10px,1.2vw,12px)] lg:text-[12px] leading-[clamp(10px,4vw,18px)] sm:leading-[clamp(14px,2.4vw,16px)] md:leading-[clamp(16px,2.2vw,20px)] lg:leading-[20px] tracking-[1px] font-[Nobile] [text-shadow:1px_1px_#fff9eb]'

const twoColumnTextWrap = 'flex-1 p-[clamp(10px,5vw,20px)] xxs:p-[clamp(20px,5vw,30px)] sm:p-[clamp(20px,2.5vw,28px)] lg:p-7 pr-0 sm:pr-0 lg:pr-0'

const twoColumnHeader = 'text-[#fa8f0d] text-[clamp(10px,5vw,20px)] xxs:text-[clamp(20px,4vw,24px)] sm:text-[clamp(18px,2.9vw,23px)] md:text-[clamp(23px,3vw,31px)] lg:text-[31px] leading-[clamp(14px,6vw,30px)] xxs:leading-[clamp(16px,6vw,40px)] sm:leading-[14px] md:leading-[clamp(16px,2.7vw,36px)] lg:leading-[36px] font-[Nobile] font-bold italic [text-shadow:1px_1px_#fff9eb]'

const twoColumnParagraph = 'mt-[clamp(2px,1.3vw,6px)] xxs:mt-0 sm:mt-2'

const twoColumnTextLink = "text-[#fa8f0d] italic font-bold text-[clamp(5px,3vw,12px)] xxs:text-[clamp(10px,2.5vw,14px)] md:text-[clamp(12px,1.6vw,16px)] lg:text-[16px] block mt-[clamp(0px,.5vw,4px)] md:mt-[clamp(4px,.5vw,8px)] lg:mt-2"

const fourColumn = 'relative'

const fourColumnImg = 'w-full'
// 399 
// 200 leading-[20px]
const ribbon = `h-[clamp(20px,10vw,40px)] xs:h-[clamp(34px,5vw,38px)] md:h-[clamp(38px,4.4vw,44px)] lg:h-[44px] 

w-[clamp(85px,43vw,185px)] xxs:w-[clamp(180px,45vw,225px)] xs:w-[clamp(147px,29vw,195px)] sm:w-[clamp(185px,29vw,225px)] md:w-[clamp(160px,21vw,210px)] lg:w-[103%] 

text-[clamp(8px,4vw,14px)] xs:text-[clamp(14px,2.2vw,16px)] md:text-[clamp(16px,2.2vw,22px)] lg:text-[22px] 
leading-[clamp(20px,11vw,45px)] xs:leading-[clamp(35px,5.5vw,39px)] md:leading-[clamp(38px,4.4vw,44px)] lg:leading-[44px]
 font-bold italic text-center text-[#f8d67c] group-hover:text-[#fcee9f] 
 absolute left-[-3.2vw] xxs:left-[-14px] sm:left-[-15px] bottom-[10px] bg-[length:100%_100%] bg-no-repeat `

const fourColumnLink = 'group'



const Home = () => {

    const context = useContext(MyContext)
    
    return (
        <div className='w-full flex flex-col items-center'>

            <div className='w-full lg:w-[1000px] px-[15px] sm:px-[30px] bg-no-repeat bg-[length:70%_150px] sm:bg-[length:70%_220px] md:bg-[length:60%_260px] lg:bg-[length:591px_260px] bg-[position:0_9px] sm:bg-[position:0_3px] md:bg-[position:0_0]'
                style={{
                    backgroundImage: `url(${bgPage})`,
                }}
            >

                <div className='mt-5.5'>
                    {/* heder */}
                    <div className='bg-[length:100%_clamp(250px,120vw,350px)] xxs:bg-[length:100%_clamp(200px,140vw,400px)] sm:bg-[length:100%_400px] md:bg-[length:100%_550px] lg:bg-[length:100%_643px] bg-no-repeat relative'
                        style={{
                            backgroundImage: `url(${sushi})`,
                        }}>



                        <Sidebar />

                        {/* title */}
                        <div className='w-[50vw] max-w-[260px]  md:w-[370px] md:max-w-[370px] lg:w-[430px] lg:max-w-[430px] absolute top-[clamp(20px,35vw,90px)] xxs:top-[clamp(20px,25vw,140px)] sm:top-[clamp(20px,55vw,140px)] md:top-40 lg:top-50 right-0 '>
                            <h1 className='text-[#d0c6ad]  font-nobile text-[clamp(10px,8vw,35px)] sm:text-[35px] md:text-[50px] lg:text-[60px] font-bold leading-[clamp(14px,8vw,30px)] sm:leading-[30px] md:leading-[50px] lg:leading-[60px] italic'>Lorem ipsum dolor sit amet!</h1>
                        </div>

                        {/* frame */}
                        <div className='w-full flex justify-center items-center mt-8 sm:mt-14 md:mt-20 lg:mt-28 '>

                            <div className='w-full  h-[142px] bg-[length:100%_355px]
                flex flex-wrap justify-between items-center gap-7 md:gap-10 '
                                style={{
                                    backgroundImage: `url(${frames})`,
                                }}
                            >

                                <div className={frameText}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla ac purus iaculis quis fermentum lacus sodales. Nulla facilisi. Nam eget orci enim, eu sodales ligula.
                                        &nbsp;
                                        <span className='text-[#fa8f0d]'>+880 1916175151</span>
                                    </p>
                                </div>

                                <div className={frameText}>
                                    <h2 className='text-[#fa8f0d] text-[clamp(10px,3.5vw,20px)] sm:text-[20px] md:text-[26px] lg:text-[32px] leading-[clamp(14px,5vw,30px)] sm:leading-[30px] lg:leading-[36px] font-[Nobile] font-bold italic'>Lorem ipsum dolor sit</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla ac purus iaculis quis fermentum lacus sodales. Nulla facilisi.</p>
                                </div>

                            </div>
                        </div>


                    </div>
                    {/* header */}
                </div>
            </div>

            {/* main */}

            <div className='w-full bg-repeat-x bg-[position:0_0] min-h-[540px] flex justify-center items-start bg-[length:100%_100%]'
                style={{
                    backgroundImage: `url(${bgBody2})`,
                }}>

                <div className='w-full lg:w-[1000px] px-[15px] sm:px-[30px]'>

                    {/* two columm */}
                    <div className='flex flex-wrap flex-col sm:flex-row gap-2 xxs:gap-5 md:gap-8 lg:gap-10 justify-between items-center mt-5 sm:mt-10'>

                        <div className={twoColumn} style={{
                            backgroundImage: `url(${frames})`,
                        }}>


                            <div className={twoColumnInnerDiv}>

                                <div className={twoColumnTextWrap}>
                                    <h3 className={twoColumnHeader}>Lorem ipsum</h3>
                                    <p className={twoColumnParagraph}>Consectetur adipiscing elit. Sed aliquet nulla ac purus iaculis quis fermentum lacus sodales.</p>

                                    <Link to='/blog' className={twoColumnTextLink}>Learn More</Link>
                                </div>

                                <img className='shrink-0 h-[clamp(110px,40.5vw,158px)] xxs:h-[clamp(159px,28vw,178px)] sm:h-[clamp(150px,22vw,170px)] md:h-[clamp(170px,20vw,213px)] lg:h-[213px] w-[clamp(90px,45vw,170px)] xxs:w-[clamp(170px,34vw,200px)] sm:w-[clamp(130px,22vw,170px)] md:w-[clamp(170px,22vw,218px)] lg:w-[218px] mt-[-13px] sm:mt-[clamp(-5px,0vw,-4px)] md:mt-[clamp(-13px,0vw,-5px)] lg:mt-[-13px]' src={sushi9} ></img>
                            </div>

                        </div>


                        <div className={twoColumn} style={{
                            backgroundImage: `url(${frames})`,
                        }}>


                            <div className={twoColumnInnerDiv}>

                                <div className={twoColumnTextWrap}>
                                    <h3 className={twoColumnHeader}>Dolor sit amet</h3>
                                    <p className={twoColumnParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla ac purus iaculis quis fermentum lacus.</p>

                                    <Link to='/blog' className={twoColumnTextLink}>Learn More</Link>
                                </div>
                                {/* h-[92px] w-[80px]*/}
                                <img className='shrink-0 h-[clamp(92px,35vw,140px)] xxs:h-[clamp(141px,25vw,158px)] sm:h-[clamp(140px,20.5vw,157px)] md:h-[clamp(157px,18.5vw,192px)] lg:h-[192px] w-[clamp(80px,40vw,160px)] xxs:w-[clamp(150px,29vw,180px)] sm:w-[clamp(120px,18vw,140px)] md:w-[clamp(140px,20vw,189px)] lg:w-[189px] mt-[clamp(5px,1vw,7px)] lg:mt-[7px]' src={sushi10} ></img>
                            </div>

                        </div>
                    </div>

                    {/* four column */}
                    <div className='mt-2 xxs:mt-5 md:mt-8 lg:mt-10 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 xxs:gap-5 md:gap-8 lg:gap-10'>
                        <div className={fourColumn}>
                            <Link to='/' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi1}></img>
                                <h3 className={ribbon} style={{
                                    backgroundImage: `url(${ribbonPng})`,
                                }}>
                                    Lorem Ipsum
                                </h3>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi2}></img>
                                <h3 className={ribbon} style={{
                                    backgroundImage: `url(${ribbonPng})`,
                                }}>
                                    Dolor sit amet 
                                </h3>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi3}></img>
                                <h3 className={ribbon} style={{
                                    backgroundImage: `url(${ribbonPng})`,
                                }}>
                                    Nulla Pretium
                                </h3>
                            </Link>
                        </div>

                        <div className={fourColumn}>
                            <Link to='/' className={fourColumnLink}>
                                <img className={fourColumnImg} src={sushi4}></img>
                                <h3 className={ribbon} style={{
                                    backgroundImage: `url(${ribbonPng})`,
                                }}>
                                    Curabitur
                                </h3>
                            </Link>
                        </div>
                        
                    </div>

                    {/* footer */}
                    <Footer/>

                </div>
            </div>
        </div>
    )
}

export default Home