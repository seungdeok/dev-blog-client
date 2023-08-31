'use client';

import { useEffect, useRef } from 'react';

export const GiscusComment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('data-repo', 'seungdeok/giscus_for_docs_seungdeok');
    scriptElem.setAttribute(
      'data-repo-id',
      process.env.NEXT_PUBLIC_REPO_ID || ''
    );
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute(
      'data-category-id',
      process.env.NEXT_PUBLIC_CATEGORY_ID || ''
    );
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');
    ref.current.appendChild(scriptElem);
  }, []);

  return <section style={{ width: '100%', marginTop: 48 }} ref={ref} />;
};
