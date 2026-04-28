import type { Snippet } from 'svelte';

export type MessageProps = {
  type?: 'error' | 'info' | 'success';
  title?: string | number;
  inline?: boolean;
  tag?: string;
  closable?: boolean;
  children?: Snippet;
  code?: Snippet;
  onClose?: () => unknown;
} & ComponentBaseProps;
