import { ButtonProps } from '@/types/Button-props.dto'
import Link from 'next/link'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ children, link, flag, theme }) => {
    return (
        <div className={
            `overflow-hidden h-full w-full   
            ${theme ? (flag ? 'bg-[rgba(232,232,232,0.2)] rounded-full text-white' : 'bg-white text-black  rounded-full flex justify-center items-center')
                : (flag ? 'rounded-full bg-gradient-to-r from-[rgba(24,24,24,0.1)] to-[rgba(24,24,24,0.1)] text-black'
                    : 'rounded-[100px] flex justify-center items-center bg-gradient-to-b from-[rgba(17,17,17,0.8)] to-[rgba(26,26,26,0.9)] text-white ')}   font-semibold`}>
            <Link href={link}>
                {children}
            </Link>
        </div>
    )
}

export default Button
