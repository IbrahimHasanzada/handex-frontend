import React from 'react'

const ModalUsers = ({ setFlag, student, model, flag }: any) => {
    return (
        <div>
            <div onClick={() => setFlag(0)} className={`fixed inset-0 bg-black opacity-50 w-screen h-screen z-101 ${flag ? '!block' : '!hidden'}`}></div>
            <div className={`fixed lg:w-[70vw] w-[95vw] justify-between rounded-[20px] gap-15 ${model ? 'bg-[#282828]' : 'bg-white '} z-102 p-12 top-1/2 left-1/2 ${flag !== 0 ? 'block lg:flex' : 'hidden'} -translate-x-1/2 -translate-y-1/2 `}>
                <svg onClick={() => setFlag(0)} className='absolute cursor-pointer top-5 right-5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1 18.9985L19 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 18.9985L1 0.998474" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='lg:w-2/5 w-full'>
                    <img className='h-full w-full md:w-78 !object-cover rounded-[20px]' src={student?.customer_profile.url} alt={student?.customer_profile.alt} />
                </div>
                <div className='lg:w-3/5 w-full'>
                    <h2 className={`font-bold mb-0 ${model ? 'text-white' : 'text-black'}`}>{student?.name}</h2>
                    {student != 'HANDEX' && <div className='flex gap-4 items-center my-6'>
                        <img className='h-10 w-10 !object-cover rounded-[20px]' src={student?.bank_logo.url} alt={student?.bank_logo.alt} />
                        <p className={`font-medium pl-1 ${model ? 'text-white' : 'text-black'}`}>{student?.bank_name}</p>
                    </div>}
                    <div dangerouslySetInnerHTML={{ __html: student?.comment }} className={`lg:line-clamp-17 line-clamp-8 ${model ? 'text-white' : 'text-black'}`} />
                </div>
            </div>
        </div>
    )
}

export default ModalUsers
