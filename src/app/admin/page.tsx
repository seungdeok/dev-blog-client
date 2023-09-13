'use client';

import WithAuth from '@/components/hocs/WithAuth';
import * as S from './page.style';

export default function AdminPage() {
  return (
    <WithAuth>
      <S.container>
        <S.section>
          <S.sectionColContent>
            <S.sectionHeading>통계</S.sectionHeading>
          </S.sectionColContent>
        </S.section>
      </S.container>
    </WithAuth>
  );
}
