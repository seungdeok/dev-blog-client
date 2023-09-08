import { useEffect, useState } from 'react';
import * as S from './ScrollSpy.style';

export function ScrollSpy() {
  const [data, setData] = useState<
    { id: string; label: string; gap: number }[]
  >([]);

  useEffect(() => {
    function parseHTML() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        document.querySelector('.wmde-markdown')?.innerHTML || '',
        'text/html'
      );
      const sections: {
        id: string;
        gap: number;
        label: string;
      }[] = [];

      [
        ...(doc.querySelectorAll('h1') || []),
        ...(doc.querySelectorAll('h2') || []),
        ...(doc.querySelectorAll('h3') || []),
      ].forEach(sectionElement => {
        sections.push({
          id: sectionElement.id,
          gap:
            sectionElement.tagName === 'H1'
              ? 0
              : sectionElement.tagName === 'H2'
              ? 4
              : 8,
          label: (sectionElement.textContent || '').trim(),
        });
      });

      return sections;
    }
    setData(parseHTML());
  }, []);

  return (
    <S.listWrap>
      {data.map(({ id, label, gap }) => (
        <li key={id}>
          <a style={{ paddingLeft: gap }} href={`#${id}`}>
            {label}
          </a>
        </li>
      ))}
    </S.listWrap>
  );
}
