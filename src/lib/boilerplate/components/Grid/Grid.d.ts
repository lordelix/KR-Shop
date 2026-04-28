import type { Snippet } from 'svelte';

export type GridProps = {
  tag?: string;
  gap?: 0 | 2 | 4 | 6 | 8 | boolean;
  size?: string | boolean;
  id?: string;
  index?: number | string;
  children?: Snippet;
} & ComponentBaseProps;
