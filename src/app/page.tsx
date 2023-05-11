'use client';
import { css } from '@emotion/react';
import * as C from 'components';

export default function Home() {
  return (
    <main>
      <C.SideBar />
      <C.Task />
    </main>
  );
}
