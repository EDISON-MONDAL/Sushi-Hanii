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
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '10px'
});




const postWrap = `text-shadow-[1px_2px_#fff9eb] text-[#aea588] 
text-[clamp(6px,2.5vw,10px)]
xxs:text-[clamp(10px,1.9vw,12px)]
sm:text-[clamp(12px,1.9vw,14px)] 
md:text-[14px]
 font-nobile font-[600] italic
border-b-[1px] border-b-[rgba(241,215,146,1)]
last:border-b-0
first:border-t-[1px] first:border-t-[rgba(241,215,146,1)]
py-[10px] sm:py-[15px] md:py-[20px] px-[10px] xxs:px-[20px] sm:px-[25px] md:px-[30px]`

const postHeadingWrap = `flex flex-col items-start xxs:flex-row justify-between xxs:items-center gap-2 xxs:gap-3 md:gap-5`
const postHeading = `flex-1
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

const postDate = `shrink-0 not-italic`
const postImg_TextWrap = `flex flex-col md:flex-row justify-between gap-2 sm:gap-3 md:gap-5 mt-3 md:mt-5`
const postImgLink = `inline-block 
w-full
xxs:w-[clamp(200px,24vw,238px)] lg:w-[238px] shrink-0`
const postImg = `flex-1 w-full`
const postText = ``

const postLink = `text-[#f9a842] 
text-[clamp(12px,2.2vw,14px)]
sm:text-[clamp(14px,2.1vw,16px)] 
md:text-[16px] 
leading-[24px]`
const postLinkHover = `underline hover:text-[#f9a842]`



const Blog = () => {

    const context = useContext(MyContext)

    const { items } = usePagination({
        count: 5,
    });


    return (
        <div className='w-full flex flex-col items-center'>
            {/* 200 mt-[-3px] */}
            <div className={`w-full lg:w-[1000px] px-[15px] sm:px-[30px] bg-no-repeat bg-[length:70%_150px] sm:bg-[length:70%_220px] md:bg-[length:60%_260px] lg:bg-[length:591px_260px] bg-[position:0_9px] sm:bg-[position:0_3px] md:bg-[position:0_0] 
            mt-[clamp(-3px,calc(-10.04px+3.518vw),4px)] 
            xxs:mt-[clamp(0px,calc(8.02px-1.255vw),3px)] 
            sm:mt-[clamp(1px,.2vw,2px)] 
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



                        <div className='  w-[clamp(75%,70vw,78%)] sm:w-[78%]
                         rounded-[20px] overflow-hidden
                         border-[rgba(0,0,0,0.01)] border-[5px]
                          mt-[clamp(20px,5vw,32px)] sm:mt-10'>


                            <div className={` bg-gradient-to-b from-[rgba(253,246,227,.4)] to-[rgba(255,255,255,.4)] w-full 
                                pt-[20px] xxs:pt-[25px] sm:pt-[30px] md:pt-[40px] 
                                pb-[8px] xxs:pb-[10px] sm:pb-[15px] md:pb-[20px]`}>

                                <div className={postWrap}>
                                    <div className={postHeadingWrap}>
                                        <h1 className={postHeading}>
                                            We Have Free Templates for Everyone
                                        </h1>

                                        <p className={postDate}>1 Jan, 2026</p>
                                    </div>

                                    <div className={postImg_TextWrap}>
                                        <Link to='#' className={postImgLink}>
                                            <img src={sushi7} className={postImg}></img>
                                        </Link>

                                        <div className={postText}>
                                            <p>
                                                Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <Link to='#' className={postLinkHover}>Terms of Use</Link>. You can even remove all our links if you want to.

                                                <br />
                                                <br />

                                                <Link to='#' className={postLink}>Read More...</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={postWrap}>
                                    <div className={postHeadingWrap}>
                                        <h1 className={postHeading}>
                                            We Have More Templates for You
                                        </h1>

                                        <p className={postDate}>2 Jan, 2026</p>
                                    </div>

                                    <div className={postImg_TextWrap}>
                                        <Link to='#' className={postImgLink}>
                                            <img src={sushiMaking} className={postImg}></img>
                                        </Link>

                                        <div className={postText}>
                                            <p>
                                                Looking for more templates? Just browse through all our <Link to='#' className={postLinkHover}>Free Website Templates</Link> and find what you're looking for. But if you don't find any website template you can use, you can try our <Link to='#' className={postLinkHover}>Free Web Design</Link> service and tell us all about it. Maybe you're looking for
                                                

                                                <br />
                                                <br />

                                                <Link to='#' className={postLink}>Read More...</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={postWrap}>
                                    <div className={postHeadingWrap}>
                                        <h1 className={postHeading}>
                                            We Have Free Templates for Everyone
                                        </h1>

                                        <p className={postDate}>3 Jan, 2026</p>
                                    </div>

                                    <div className={postImg_TextWrap}>
                                        <Link to='#' className={postImgLink}>
                                            <img src={sushi8} className={postImg}></img>
                                        </Link>

                                        <div className={postText}>
                                            <p>
                                                Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <Link to='#' className={postLinkHover}>Terms of Use</Link>. You can even remove all our links if you want to.

                                                <br />
                                                <br />

                                                <Link to='#' className={postLink}>Read More...</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <nav className='mt-2 sm:mt-3 px-[10px] xxs:px-[20px] sm:px-[25px] md:px-[30px] flex justify-end items-center'>
                                    <List>
                                        {items.map(({ page, type, selected, ...item }, index) => {
                                            let children = null;

                                            const baseClass =
                                                "underline text-[#aea588] text-[clamp(6px,3.15vw,14px)] xxs:text-[clamp(14px,2.2vw,16px)] md:text-[16px] font-[600] [text-shadow:1px_1px_#fff9eb] hover:text-[#f9a842] inline-block italic";

                                            if (type === "start-ellipsis" || type === "end-ellipsis") {
                                                children = <span className={baseClass}>…</span>;
                                            } else if (type === "page") {
                                                children = (
                                                    <button
                                                        type="button"
                                                        {...item}
                                                        className={`${baseClass} ${selected ? "font-bold" : "font-normal"}`}
                                                    >
                                                        {page}
                                                    </button>
                                                );
                                            } else {
                                                children = (
                                                    <button type="button" {...item} className={baseClass}>
                                                        {type === "previous"
                                                            ? "Prev"
                                                            : type === "next"
                                                                ? "Next"
                                                                : type}
                                                    </button>
                                                );
                                            }

                                            return <li key={index}>{children}</li>;
                                        })}
                                    </List>
                                </nav>
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

export default Blog