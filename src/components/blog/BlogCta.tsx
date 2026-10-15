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

  const button = hasButton && (
    <span className='inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gradient-to-b from-[rgba(17,17,17,0.8)] to-[rgba(26,26,26,0.9)] text-white font-medium text-base'>
      {buttonText}
      <svg className='size-5 motion-safe:transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 17L17 7M17 7H9M17 7V15' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </span>
  );

  return (
    <aside aria-label={title || buttonText} className='relative mt-12 overflow-hidden rounded-[20px] bg-white box-shadow px-7 py-8 md:px-10 md:py-10'>
      <span aria-hidden className='absolute left-0 top-8 bottom-8 md:top-10 md:bottom-10 w-1 rounded-r bg-gradient-to-b from-[#73CCD8] to-[#2B6B9F]' />
      {title && <p className='text-[22px] md:text-[28px] font-bold leading-tight text-[#141414]'>{title}</p>}
      {description && <p className={`${title ? 'mt-3' : ''} text-lg text-[#666] whitespace-pre-line`}>{description}</p>}
      {hasButton && (
        <div className={title || description ? 'mt-7' : ''}>
          {isExternal(link!) ? (
            <a id='blog-cta-button' href={link} target='_blank' rel='noopener noreferrer' className='group inline-block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-corporate'>
              {button}
            </a>
          ) : (
            <Link id='blog-cta-button' href={link!} className='group inline-block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary-corporate'>
              {button}
            </Link>
          )}
        </div>
      )}
    </aside>
  );
};

export default BlogCta;
