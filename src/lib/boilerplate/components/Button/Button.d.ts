import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';
import type { Snippet } from 'svelte';
import type { FontelloProps } from '../Fontello/Fontello';

export type ButtonProps = {
  children?: Snippet;
  disabled?: boolean;
  fontello?: FontelloProps['name'];
  isLoading?: boolean;
  onClick?: () => unknown;
  rel?: 'follow' | 'nofollow noopener';
  target?: '_blank';
  to?: string;
  variant?: 'primary' | 'secondary';
} & ComponentBaseProps;
