import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';

const Home = () => {
  return (
    <section id='home' className='home pt-20 flex flex-col px-8'>
      <div className='max-w-2xl flex flex-col md:mx-auto'>
        <div className='img-container flex items-center justify-center w-full'>
          <div className='w-48 h-48 rounded-full shadow-xl border-4 border-primary mb-10 overflow-hidden'>
            <Image
              src='/assets/images/photo.jpg'
              width={192}
              height={192}
              alt='Picture of Anshuman Pandey'
            />
          </div>
        </div>
        <div className='mb-6'>
          <h1 className='text-3xl text-center md:text-left md:text-5xl font-bold tracking-tight'>
            Hey, I'm Anshuman Pandey
          </h1>
        </div>

        <div className='home-intro'>
          <p className='text-textSecondary dark:text-darkTextSecondary text-sm md:text-base mb-4'>
            I'm a{' '}
            <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
              full stack web developer
            </span>
            , I love working with web technologies and building web apps. I'm
            passionate about learning new skills that help me become a better
            developer.
          </p>

          <p className='text-textSecondary dark:text-darkTextSecondary text-sm md:text-base mb-8'>
            I have worked with{' '}
            <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
              HTML, CSS and JavaScript{' '}
            </span>{' '}
            and have experience with various JavaScript frameworks like{' '}
            <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
              React.js, Next.js Node.js and Electron.js
            </span>
            . I have experience in building{' '}
            <span className='font-semibold text-textPrimary dark:text-darkTextPrimary'>
              REST APIs with Express
            </span>
            . I use these tools to build user-friendly web apps that function
            well.
          </p>

          <div className='home-intro-links'>
            <div className='mb-4'>
              <p className='font-semibold text-textPrimary dark:text-darkTextPrimary text-base md:text-lg'>
                Connect with me:{' '}
              </p>
            </div>
            <div className='flex gap-4'>
              <a
                href='https://github.com/pandeymangg'
                target='_blank'
                rel='noreferrer'
              >
                <div className='social-icon border-[#9ca0b0] dark-border-[#6c7086] rounded-lg w-16 h-12 md:w-20 md:h-14 border-4 cursor-pointer flex justify-center items-center hover:border-4'>
                  <AiFillGithub size={'2rem'} />
                </div>
              </a>

              <a
                href='https://www.linkedin.com/in/pandeyman/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-lg border-[#9ca0b0] dark-border-[#6c7086] w-16 h-12 md:w-20 md:h-14 border-4 cursor-pointer flex justify-center items-center hover:border-4'>
                  <AiFillLinkedin size={'2rem'} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
