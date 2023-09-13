/* eslint-disable no-unused-vars */

'use client';

import React, { Dispatch, SetStateAction } from 'react';
import dynamic from 'next/dynamic';
import type { ContextStore } from '@uiw/react-md-editor';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface Props {
  data: string;
  setter: Dispatch<SetStateAction<string>>;
}

type OnChangeType = (
  value?: string,
  event?: React.ChangeEvent<HTMLTextAreaElement>,
  state?: ContextStore
) => void;

export function Editor({ data, setter }: Props) {
  const handleChange = React.useCallback<OnChangeType>(
    value => {
      setter(value || '');
    },
    [setter]
  );

  return (
    <MDEditor style={{ width: '100%' }} value={data} onChange={handleChange} />
  );
}
