import Link from 'next/link';

interface BlogCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  link?: string;
}

const isExternal = (url: string) => /^https?:\/\//i.test(url) && !/^https?:\/\/(www\.)?handex\.edu\.az/i.test(url);

const BlogCta = ({ title, description, buttonText, link }: BlogCtaProps) => {
  const hasButton = !!(buttonText && link);
  if (!title && !description && !hasButton) return null;

  const buttonClass = 'group shrink-0 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-gradient-to-b from-[rgba(17,17,17,0.8)] to-[rgba(26,26,26,0.9)] text-white font-medium text-base whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary-corporate';
  const buttonContent = (
    <>
      {buttonText}
      <svg className='size-5 motion-safe:transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 17L17 7M17 7H9M17 7V15' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </>
  );

  return (
    <aside aria-label={title || buttonText} className='mt-12 rounded-[20px] bg-white box-shadow p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-6'>
      <div className='flex items-center gap-4 md:gap-5 flex-1 min-w-0'>
        <img src='/assets/img/blog-cta.webp' alt='' aria-hidden width={80} height={80} className='size-16 md:size-20 shrink-0 object-contain' />
        <div className='min-w-0'>
          {title && <p className='text-lg md:text-xl font-bold leading-snug text-[#141414]'>{title}</p>}
          {description && <p className={`${title ? 'mt-1' : ''} text-sm md:text-base text-[#666] leading-relaxed`}>{description}</p>}
        </div>
      </div>
      {hasButton && (
        isExternal(link!) ? (
          <a id='blog-cta-button' href={link} target='_blank' rel='noopener noreferrer' className={buttonClass}>
            {buttonContent}
          </a>
        ) : (
          <Link id='blog-cta-button' href={link!} className={buttonClass}>
            {buttonContent}
          </Link>
        )
      )}
    </aside>
  );
};

export default BlogCta;
