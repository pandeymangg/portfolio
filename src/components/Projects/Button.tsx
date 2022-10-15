import React from 'react';

interface IButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: IButtonProps) => {
  return (
    <a
      href={link}
      rel='noreferrer'
      target='_blank'
      className='flex items-center justify-center'
    >
      <div className='mr-4 rounded-lg px-6 md:px-8 py-2 bg-primary flex items-center justify-center'>
        <span className='text-xs md:text-sm text-black font-semibold tracking-normal'>
          {text}
        </span>
      </div>
    </a>
  );
};

export default Button;
