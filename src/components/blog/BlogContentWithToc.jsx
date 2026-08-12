'use client';

import { useEffect, useState } from 'react';

const BlogContentWithTOC = ({ description }) => {
  const [headings, setHeadings] = useState([]);
  const [index, setIndex] = useState(0);

  const scrollToElement = (elementId, idx) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIndex(idx);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(description, 'text/html');
      const h2Elements = Array.from(doc.querySelectorAll('h2'));

      const headingsData = h2Elements.map((el) => {
        const id = el.id || el.textContent.toLowerCase().replace(/\s+/g, '-');
        el.id = id;
        return { id, text: el.textContent };
      });

      setHeadings(headingsData);

      const contentEl = document.getElementById('blog-content');
      if (contentEl) contentEl.innerHTML = doc.body.innerHTML;
    }
  }, [description]);

  // Track scroll position to update active heading
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Add some buffer

      headings.forEach((heading, idx) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setIndex(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/4 w-full">
        <div className="sticky top-30">
          <p className="text-xl font-semibold mb-3">Mündəricat</p>
          <ul className="flex flex-col gap-1 rounded-l-lg">
            {headings.map((h, idx) => (
              <li 
                key={h.id} 
                onClick={() => scrollToElement(h.id, idx)} 
                className="flex gap-3 text-xl cursor-pointer" 
              >
                {index === idx && (
                  <span className="bg-gradient-to-br from-[#73CCD8] to-[#2B6B9F] rounded-tl-xs rounded-bl-xs w-1"></span>
                )}
                <span
                  className={`${
                    index === idx 
                      ? "bg-clip-text text-transparent bg-[linear-gradient(224.86deg,_#73CCD8_4.87%,_#2B6B9F_96.04%)] font-bold" 
                      : "font-medium text-[#141414]"
                  }`}
                >
                  {h.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <article 
        id="blog-content" 
        className="prose lg:w-3/4 text-xl w-full !text-[#666] [&_a]:!text-blue-600 [&_h1]:text-black [&_h2]:text-black [&_h3]:text-black [&_h4]:text-black [&_h5]:text-black [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:my-1"
        style={{
          scrollMarginTop: '120px'
        }}
      ></article>
    </div>
  );
};

export default BlogContentWithTOC