import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';

type Source = [string, number, number] | [string, number] | string;

export type PictureProps = ComponentBaseProps & {
  src: Source;
  tablet?: Source;
  desktop?: Source;
  widescreen?: Source;
  align?: 'left' | 'right';
  loading?: HTMLImageElement['loading'];
  placeholder?: string;
};
