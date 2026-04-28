import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';
import type { Snippet } from 'svelte';

export type AccordionProps = ComponentBaseProps & {
  children?: Snippet;
};
