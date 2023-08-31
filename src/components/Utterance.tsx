export const Utterances = () => {
  return (
    <section
      ref={el => {
        if (!el) return;
        const scriptTarget = document.createElement('script');
        scriptTarget.src = 'https://utteranc.es/client.js';
        scriptTarget.async = true;
        scriptTarget.crossOrigin = 'anonymous';
        scriptTarget.setAttribute(
          'repo',
          'seungdeok/utterances_for_docs_seungdeok'
        );
        scriptTarget.setAttribute('issue-term', 'title');
        scriptTarget.setAttribute('theme', 'preferred-color-scheme');
        el.appendChild(scriptTarget);
      }}
    />
  );
};
