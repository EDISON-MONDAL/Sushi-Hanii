import React, { useContext, useState } from 'react'
import bgBody from '../assets/bg-body.png'
import bgBody2 from '../assets/bg-body2.png'
import sushi7 from '../assets/sushi7.png'
import sushi8 from '../assets/sushi8.png'
import sushiMaking from '../assets/sushi-making.png'


import { Link } from 'react-router'
import bgPage from '../assets/bg-page.png'
import Footer from '../Components/Footer.jsx'
import context from '../App.jsx'

import { MyContext } from '../Components/Context.js'
import Sidebar from '../Components/Sidebar.jsx'
import sushiChef1 from '../assets/sushi-chef1.png'
import sushiChef2 from '../assets/sushi-chef2.png'
import sushiChef3 from '../assets/sushi-chef3.png'



const aboutImgContainer = `grid grid-cols-3 gap-[clamp(2px,1.1vw,4px)] xxs:gap-1 mb-[clamp(10px,4.9vw,20px)] xxs:mb-5`
const aboutImgWrap = `w-full`
const aboutImg = `w-full`


const textHeadingWrap = `flex flex-col 
gap-[8px] xxs:gap-[10px] sm:gap-[15px] md:gap-[20px]
mb-[8px] xxs:mb-[10px] sm:mb-[15px] md:mb-[20px] last:mb-0`

const textHeading = `
text-shadow-[1px_2px_#fff9eb] text-[#fa8f0d]
text-[clamp(8px,2.9vw,12px)]
xxs:text-[clamp(12px,2.8vw,16px)]
sm:text-[clamp(16px,2.85vw,22px)]
md:text-[clamp(22px,2.5vw,25px)]
lg:text-[25px]

leading-[clamp(14px,5vw,20px)]
xxs:leading-[20px]
md:leading-[25px]
lg:leading-[25px]
font-nobile font-bold italic`

const textP = `text-shadow-[1px_2px_#fff9eb] text-[#aea588] 
text-[clamp(6px,2.5vw,10px)]
xxs:text-[clamp(10px,1.9vw,12px)]
sm:text-[clamp(12px,1.9vw,14px)] 
md:text-[14px]
 font-nobile font-[600] italic

`

const textLink = `underline hover:text-[#f9a842]`




const About = () => {

    const context = useContext(MyContext)




    return (
        <div className='w-full flex flex-col items-center'>
            {/* 200 mt-[-8px] */}
            <div className={`w-full lg:w-[1000px] px-[15px] sm:px-[30px] bg-no-repeat bg-[length:70%_150px] sm:bg-[length:70%_220px] md:bg-[length:60%_260px] lg:bg-[length:591px_260px] bg-[position:0_9px] sm:bg-[position:0_3px] md:bg-[position:0_0] 
            mt-[clamp(-8px,calc(-8px+((100vw-200px)*3/199)),-5px)] 
            xxs:mt-[clamp(-5px,calc(-4px-((100vw-400px)*1/99)),-4px)] 
            xs:mt-[clamp(-6px,calc(-6px+((100vw-500px)*2/139)),-4px)]
            sm:mt-[clamp(-3px,calc(-3px+((100vw-640px)/127)),-2px)] 
            md:mt-[clamp(-5px,calc(7.04px-1.177vw),-2px)] 
            lg:mt-[-4px]`}

                style={{
                    backgroundImage: `url(${bgPage})`,
                }}
            >

                <div className='mt-5.5'>
                    {/* heder */}
                    <div className='flex justify-between'
                    >



                        <Sidebar />



                        <div className=' 
                        w-[72%] 
                        xxs:w-[clamp(75%,70vw,78%)] sm:w-[78%]
                         
                          mt-[clamp(20px,5vw,32px)] sm:mt-10 
                          '>

                            {/* about img */}
                            <div className={aboutImgContainer}>
                                <div className={aboutImgWrap}>
                                    <img className={aboutImg} src={sushiChef1}></img>
                                </div>
                                <div className={aboutImgWrap}>
                                    <img className={aboutImg} src={sushiChef2}></img>
                                </div>
                                <div className={aboutImgWrap}>
                                    <img className={aboutImg} src={sushiChef3}></img>
                                </div>
                            </div>

                            {/* about text */}

                            <div className={` bg-[rgba(255,255,255,.4)] w-full h-auto 
                                p-[clamp(8px,3.9vw,15px)] xxs:p-[20px] sm:p-[25px] md:p-[30px]

                                rounded-[20px] overflow-hidden
                         border-[rgba(0,0,0,0.01)] border-[5px]
                                `}>

                                <div className={textHeadingWrap}>
                                    <h1 className={textHeading}>
                                        We Have Free Templates for Everyone
                                    </h1>

                                    <p className={textP}>
                                        Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <Link to='#' className={textLink}>Terms of Use</Link>. You can even remove all our links if you want to.
                                    </p>
                                </div>


                                <div className={textHeadingWrap}>
                                    <h1 className={textHeading}>
                                        We Have More Templates for You
                                    </h1>

                                    <p className={textP}>
                                        Looking for more templates? Just browse through all our <Link to='#' className={textLink}>Free Website Templates</Link> and find what you're looking for. But if you don't find any website template you can use, you can try our <Link to='#' className={textLink}>Free Web Design</Link> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
                                    </p>
                                </div>



                                <div className={textHeadingWrap}>
                                    <h1 className={textHeading}>
                                        Be Part of Our Community
                                    </h1>

                                    <p className={textP}>
                                        If you're experiencing issues and concerns about this website template, join the discussion <Link to='#' className={textLink}>on our forum</Link> and meet other people in the community who share the same interests with you.

                                    </p>
                                </div>



                                <div className={textHeadingWrap}>
                                    <h1 className={textHeading}>
                                        Template details
                                    </h1>

                                    <p className={textP}>
                                        Design version 2 <br />
                                        Code version 2<br />
                                        Website Template details, discussion and updates for this <Link to='#' className={textLink}>Sushi Website Template</Link>.<br />
                                        Website Template design by <Link to='#' className={textLink}>Free Website Templates</Link>.<br />
                                        Please feel free to remove some or all the text and links of this page and replace it with your own About content.


                                    </p>
                                </div>


                            </div>

                        </div>




                    </div>
                    {/* header */}
                </div>
            </div>

            {/* footer */}

            <div className='w-full flex justify-center items-start '>

                <div className='w-full lg:w-[1000px] px-[15px] sm:px-[30px]'>


                    {/* footer */}
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default About