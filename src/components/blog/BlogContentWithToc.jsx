'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

const BlogContentWithTOC = ({ description }) => {
  const [headings, setHeadings] = useState([]);

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

  const t = useTranslations()

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <aside className="lg:w-1/4 w-full">
        <h2 className="text-xl font-semibold mb-3">{t("blog.description")}</h2>
        <ul className=" flex flex-col gap-1 rounded-l-lg">
          {headings.map((h) => (
            <li
              className='flex gap-3'
              key={h.id}>
              <span className='bg-gradient-to-br from-[#73CCD8] to-[#2B6B9F] rounded-tl-xs rounded-bl-xs w-1'></span>
              <a
                href={`#${h.id}`}
                className="bg-gradient-to-br font-bold hover:underline from-[#73CCD8] to-[#2B6B9F] bg-clip-text text-transparent"
              >{h.text}</a>
            </li>
          ))}
        </ul>
      </aside>

      <article id="blog-content" className="prose lg:w-3/4 w-full"></article>
    </div>
  );
};

export default BlogContentWithTOC;
