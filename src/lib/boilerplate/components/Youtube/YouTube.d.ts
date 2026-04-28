import type { ComponentBaseProps } from '$lib/boilerplate/boilerplate';

export type YouTubeProps = {
  videoId: string;
  allow?: Array<
    'autoplay' | 'clipboard-write' | 'encrypted-media' | 'picture-in-picture'
  >;
} & ComponentBaseProps;
