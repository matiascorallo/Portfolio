"use client"
import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import {useState} from "react";
import imgmy from "../public/imgmy.png"
import imgmy2 from "../public/imgmy2.png"


export default function Home() {
      const [darkMode, setDarkMode] = useState(false);
  return (
      
      <div className={darkMode ? "dark" : ""} >
        <Head>
          <title>Matias Corallo portfolio</title>
          <meta meta = "description" content="Generated by Matias"> </meta>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
         <main className='bg-white px-10 md:px-20 lg-40 dark:bg-gray-900 font-mono'>
            <section className=' min-h-screen'>
                <nav className='py-10 mb-12 flex justify-between'>
                  <h1 className='text-xl dark: dark:text-white' >DEVELOPEDBYMC</h1>
                  <ul className='flex items-center'>
                    <li>
                       <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl ml-1 dark:text-white'/>
                       </li>
                    <li>
                      <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
                      </li>
                  </ul>
                </nav>
                <div className='text-center p-10'>
                  <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Matias Corallo</h2>
                  <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full-Stack Developer</h3>
                  <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white'>Devloper providing services for programming needs. Let me now if you need it</p>
                </div>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
                  <a href='https://www.linkedin.com/in/corallo-matias-a76677262/'><AiFillLinkedin/></a> 
                  <a href='https://github.com/matiascorallo'><AiFillGithub/></a>
                  <a href='https://www.instagram.com/matiascorallo_/'><AiFillInstagram/></a> 
                </div>
                <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:md:h-96 md:w-96'>
                <Image src={deved} layout="fill" objectFit='cover' />
                </div>
            </section> 
            <section>
              <div>  
                <h3 className='text-3xl pt-10 pb-3 dark:text-white px-3'>Services I Offer</h3>
                <p className='text-md py-2 leading-8 text-grey-800 dark:text-white'>
                I am currently a <span className="dark:text-cyan-800 text-cyan-600 font-medium">Full-Stack</span> developer who works freelance. My <span className="dark:text-cyan-800 text-cyan-600 font-medium	">services</span> are the creation of blogs, personal pages and anything that involves or is related to that.
                  </p>
                  <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                Apart from working as a freelance, I am actively <span className="dark:text-cyan-800 text-cyan-600 font-medium	">looking</span> for full-time or temporary work as a Full-Stack developer either in a<span className="dark:text-cyan-800 text-cyan-600 font-medium	"> company</span> or in a <span className="dark:text-cyan-800 text-cyan-600 font-medium	">project</span>
                  </p>
              </div>
            </section>
            <section>
            <div className='lg:flex gap-11  max-w-100% justify-center'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700 min-w-3/12 '>
                <Image src={code} width={100} height={100}/>
                <h3 className='text-2xl font-medium pt-2 pb-2 dark:text-white'>Languages I Use</h3>
                <p className='py-2 dark:text-white'>
                  Creating funtional code for your website 
                </p>
                <h4 className='py-4 text-teal-500 text-xl font-medium	'>Functional Code</h4>
                <p className='text-gray-800 py-1 dark:text-white'>HTML</p> 
                <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
                <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
                <p className='text-gray-800 py-1 dark:text-white'>React.js</p>
                <p className='text-gray-800 py-1 dark:text-white'>Node.js</p>
                <p className='text-gray-800 py-1 dark:text-white'>Express.js</p>
                <p className='text-gray-800 py-1 dark:text-white'>Next.js</p>
                <p className='text-gray-800 py-1 dark:text-white'>Tailwindcss</p>
                <p className='text-gray-800 py-1 dark:text-white'>Bootstrap</p>     
              </div>

              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700 min-w-3/12 '>
                <Image src={design} width={100} height={100}/>
                <h3 className='text-2xl font-medium pt-2 pb-2 dark:text-white'>Tools Desing</h3>
                <p className='py-2 dark:text-white '>
                To create beautiful designs for your website 
                </p>
                <h4 className='py-4 text-teal-500 text-xl font-medium	'>Beatiful Desing</h4>
                <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
                <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
                <p className='text-gray-800 py-1 dark:text-white'>Figma</p>                 
              </div>


              <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-gray-300 dark:bg-gray-700 min-w-3/12 '>
                <Image src={consulting} width={100} height={100}/>
                <h3 className='text-2xl font-medium pt-2 pb-2 dark:text-white'>Contact</h3>
                <p className='py-2 dark:text-white'>
                Ask me any questions you have without obligation                
                </p>
                <h4 className='py-4 text-teal-500 text-xl font-medium'>Ways to Contact Me</h4>
                <p className='text-gray-800 py-1 dark:text-white'> <span className='text-black italic dark:text-white font-medium'>Number:</span>  +54 11 3841 4730</p>
                <p className='text-gray-800 py-3 dark:text-white'> <span className='text-black italic dark:text-white font-medium'>Mail: </span>matiascorallodev@gmail.com</p>
                <p className='text-gray-800 pb-3 dark:text-white'> <span className='text-black italic dark:text-white font-medium'>instagram:</span> matiascorallo_</p>
                <p className='text-gray-800 py-1 dark:text-white'> <span className='text-black italic dark:text-white font-medium'>twitter: </span> @MatyCorallo</p>
                  
              </div>
            </div>
            </section>
    
            <section>
              <div>
                <h3 className=' text-3xl pt-11 pb-3 dark:text-white px-3'>Portfolio</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                I currently have projects, but these have not yet been done. I have some other basic about React.js or JavaScript. Which are in my <span className="dark:text-cyan-800 text-cyan-600 font-medium"><a href="https://github.com/matiascorallo" >GitHub</a></span>, in case you want to see them, it is located in the <span className="dark:text-cyan-800 text-cyan-600 font-medium"><a href="#" >beginning</a></span> of the web
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I <span className="dark:text-cyan-800 text-cyan-600 font-medium"><a href="https://www.linkedin.com/in/corallo-matias-a76677262/" >offer</a></span> from a wide range of services, including brand design,
              programming and teaching.
            </p>
              </div>
             
            </section>
         </main>
      </div>
  )
}
