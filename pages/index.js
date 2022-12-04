import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/image";
import profilePic from "/public/portfolioPicFinal.png"
import kitsune from "/public/kitsune-icon-final.png"
import port1 from "/public/001.png"
import port2 from "/public/002.png"
import port3 from "/public/003.png"
import port4 from "/public/004.png"
import { useState } from 'react';
import {theme, useTheme } from "next-themes";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className= {darkMode ? 'dark' : ""}>
      <Head>
        <title>Dawson Woolley Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
           
              <h1 className='text-xl font-extrabold dark:bg-white rounded-md p-2 bg-gradient-to-r from-teal-200 to-lime-200'>Kitsune Web Development</h1>
              
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
              </li>
              <li><a className='bg-gradient-to-r from-teal-200 to-lime-200 text-gray-800 px-4 py-2 rounded-md ml-8 font-extrabold' href="https://drive.google.com/file/d/1Cerl-yhPrzb-9X1dG8k96kRPLt1KFFpV/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Dawson Woolley</h2>
            <h3 className='text-2xl py-2 md:text-3xl text-gray-500'>Frontend developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-500 md:text-xl'>I am a software engineer with a passion for frontend development and design. </p>
            <p className='text-md py-5 leading-8 text-gray-500 md:text-xl'>I am currently seeking fulltime employment</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/Dawsonkw"><AiFillGithub /></a>
            <a href="https://www.instagram.com/dawson_does_jiujitsu/"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/dawson-woolley-2bb513244/"><AiFillLinkedin /></a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-200 to-lime-200 rounded-full w-80 h-80  mx-auto mb--10'>
            <Image src={profilePic} layout="fill" objectFit='contain' />
          </div>
        </section>
{/* Section 2 */}
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 text-teal-600'>Services I offer</h3>
            <p className='text-center text-md py-2 leading-8 text-gray-500 md:text-xl'>
              Since the beginning of my journey as a Frontend Developer, I have had the opportunity to work with many technologies which has led me to building my own personal projects. I am also an expert in Brazilian Jiu Jitsu, currently holding a rank of Brown Belt under the esteemed <a href="https://www.bjjheroes.com/bjj-fighters/amal-easton"><span className='text-teal-600'>Professor Amal Easton</span></a>. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-500'>I offer a wide range of services both in the software development industry as well as on the jiu-jitsu mats, including programming and software design. As well as the ability to teach Brazilian Jiu Jitsu</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white' >
              <Image src={kitsune} class='object-none object-center m-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Beautiful and Responsive Design</h3>
              <p>Creating elegant and highly responsive designs for whatever project you may have in mind. 
              </p>
              <h4 className='text-gray-500'>Technologies I work with</h4>
              <p className='text-gray-500 py-1'>Javascript</p>
              <p className='text-gray-500 py-1'>React</p>
              <p className='text-gray-500 py-1'>HTML / CSS</p>
              <p className='text-gray-500 py-1'>Tailwind</p>
              <p className='text-gray-500 py-1'>Python</p>
              <p className='text-gray-500 py-1'>Sqlite</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white place-content-center'>            
            <Image src={kitsune} class='object-none object-center m-auto'/>            
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Brazilian Jiu Jitsu Lessons</h3>
              <p>I am available to teach private and small group lessons in Brazilian Jiu Jitsu. 
              </p>
              <h4> Reach out to me to get started or continue training in the fun and challenging sport of Brazilian Jiu Jitsu</h4>
              
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 text-teal-600'>Portfolio</h3>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <h3 className='text-xl text-gray-500'>JS based To Do List Creator</h3>
                <Image src={port4} className="rounded-lg object-cover"width={'100%'} height={'100%'}/>
                <a href="https://github.com/Dawsonkw/jsToDoList" className='text-blue-400'>Code</a>
              </div>
              <div className='basis-1/3 flex-1'>
                <h3 className='text-xl text-gray-500'>Pokedex</h3>
                <Image src={port2} className="rounded-lg object-cover"width={'100%'} height={'100%'}/>
                <a href="https://github.com/Dawsonkw/pokedex" className='text-blue-400'>Code</a>
              </div>
              <div className='basis-1/3 flex-1'>
                <h3 className='text-xl text-gray-500'>Simple JS CLock App</h3>
                <Image src={port1} className="rounded-lg object-cover"width={'100%'} height={'100%'}/>
                <a href="https://github.com/Dawsonkw/jsClock" className='text-blue-400'>Code</a>
              </div>
              <div className='basis-1/3 flex-1'>
                <h3 className='text-xl text-gray-500'>JS Astronomy Picture of the Day App</h3>
                <Image src={port3} className="rounded-lg object-cover"width={'100%'} height={'100%'}/>
                <a href="https://github.com/Dawsonkw/nasaAPODapp" className='text-blue-400'>Code</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


// TO DO
// Make your darkmode into a toggle button, here's a good example
// https://kenaszogara.vercel.app/posts/how-to-create-dark-mode-toggle-button  




