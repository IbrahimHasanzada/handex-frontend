import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'
import { StudyCardsDto } from '@/types/StudyCards-prop.dto'

const StudyCards: React.FC<StudyCardsDto> = ({ item, index }) => {
    return (
        <div className='group relative bg-white rounded-3xl h-76 w-76 p-6 flex flex-col justify-between'>
            <p className='font-medium text-2xl max-w-47'>{item.title}</p>
            <div className='relative h-45 w-60'>
                <Image src={`${item.img}`} alt='Handex study area icons' fill className='object-cover duration-500 group-hover:scale-110' />
            </div>
            <div className='absolute -top-5 -right-7 bg-primary-bg w-28 h-28 p-5 rounded-full flex items-center justify-center'>
                <Button flag={true} link=''>
                    <div className='w-full h-full relative'>
                        <Image src='/assets/img/Arrow.png' alt='Handex study area arrow icon' width={48} height={48} className='absolute duration-500 h-12 w-12 group-hover:translate-x-15 group-hover:-translate-y-8 translate-x-3 translate-y-3' />
                        <Image src='/assets/img/Arrow.png' alt='Handex study area arrow icon' width={48} height={48} className='absolute duration-500 h-12 w-12 group-hover:translate-x-3 group-hover:translate-y-3 -translate-x-10 translate-y-15' />
                    </div>
                </Button>
            </div>
            <svg className='absolute size-[50px] top-0 right-17.5 -rotate-90' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path className='absoulte fill-primary-bg' d="M -50 70 Q 100 95, 100 0 L 100 100 Z" stroke="#F4F5F5" fill="none" strokeWidth="2" />
            </svg>

            <svg className='absolute size-[60px] top-21 -right-4.5 -rotate-95' width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path className='absoulte fill-primary-bg' d="M -20 62 Q 90 95, 96 -7 L 150 100 Z" stroke="#F4F5F5" fill="none" strokeWidth="2" />
            </svg>
        </div>
    )
}

export default StudyCards
