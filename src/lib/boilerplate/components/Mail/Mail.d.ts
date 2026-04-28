import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';
import type { Snippet } from 'svelte';
import type { FontelloProps } from '../Fontello/Fontello';

export type MailProps = ComponentBaseProps & {
  to: string;
  fontello?: FontelloProps['name'];
  subject?: string;
  body?: string;
  children?: Snippet;
};
