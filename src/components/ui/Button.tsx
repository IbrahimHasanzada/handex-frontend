import { ButtonProps } from '@/types/Button-props.dto'
import Link from 'next/link'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ children, link, flag }) => {
    return (
        <div className={`overflow-hidden h-full w-full bg-primary-corporate  ${flag ? 'rounded-full' : 'rounded-[100px] flex justify-center items-center '}  text-white font-semibold`}>
            <Link href={link}>
                {children}
            </Link>
        </div>
    )
}

export default Button
