import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';

export type FigureProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  caption?: string;
  loading?: HTMLImageElement['loading'];
  placeholder?: string;
} & ComponentBaseProps;
