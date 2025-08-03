'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const BlogContentWithTOC = ({ description }) => {
  const [headings, setHeadings] = useState([]);
  const [index, setIndex] = useState(0)
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
      //  const allElements = doc.body.querySelectorAll('*');
      // allElements.forEach((el) => {
      //   // Əgər tag h1, h2, h3, h4, h5, h6 deyilsə text rəngini dəyiş
      //   if (!/^h[1-6]$/i.test(el.tagName)) {
      //     el.style.color = '#707070';
      //   }
      // }); 

      setHeadings(headingsData);

      const contentEl = document.getElementById('blog-content');
      if (contentEl) contentEl.innerHTML = doc.body.innerHTML;
    }
  }, [description]);

  const t = useTranslations();

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/4 w-full">
        <div className="sticky top-30">
          <p className="text-xl font-semibold mb-3">{t('blog.description')}</p>
          <ul className="flex flex-col gap-1 rounded-l-lg">
            {headings.map((h, idx) => (
              <li onClick={() => setIndex(idx)} className="flex gap-3 text-xl" key={h.id}>
                {
                  index === idx && <span className="bg-gradient-to-br from-[#73CCD8] to-[#2B6B9F] rounded-tl-xs rounded-bl-xs w-1"></span>
                }
                <a
                  href={`#${h.id}`}
                  className={` ${index == idx ? "bg-clip-text text-transparent bg-[linear-gradient(224.86deg,_#73CCD8_4.87%,_#2B6B9F_96.04%)] font-bold" : "font-medium text-[#141414]"}  `}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <article id="blog-content" className="prose lg:w-3/4 text-xl w-full !text-[#666] [&_h1]:text-black [&_h2]:text-black [&_h3]:text-black [&_h4]:text-black [&_h5]:text-black"></article>
    </div>
  );
};

export default BlogContentWithTOC;
