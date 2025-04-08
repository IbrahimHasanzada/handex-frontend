import React from 'react'
import TopCompanies from '../home/TopCompanies'

const Partners: React.FC<{ page: string }> = ({ page }) => {
    return (
        <div className='py-6 md:pt-11 md:pb-16 bg-[#282828]'>
            <div className='px-6'>
                <h2 className='text-white'>Korporativ Tərəfdaşlar</h2>
                <p className='text-[#DDD]'>"Güvənə əsaslanan korporativ tərəfdaşlıqlarımızla, dəyərləri birləşdirərək gələcəyin həllərini formalaşdırırıq."</p>
            </div>
            <div className='flex flex-col'>
                {Array.from({ length: 3 }).map((item, index) => (
                    <div key={index}><TopCompanies page={page} /></div>
                ))}
            </div>
        </div>
    )
}

export default Partners
