import { getCollection, type CollectionEntry } from 'astro:content';
import source from '../data/works.json';

export type Work = CollectionEntry<'works'>;

export const categories = [
  { key: 'film', label: 'Films' },
  { key: 'post', label: 'Post & sound' },
  { key: 'music', label: 'Music videos' },
] as const;

/** All works, newest first. Works from the same year keep their order in works.json. */
export async function getWorks(): Promise<Work[]> {
  const works = await getCollection('works');
  const order = new Map(source.map((w, i) => [w.id, i]));
  const end = (w: Work) => w.data.yearEnd ?? w.data.year;
  return works.sort((a, b) => end(b) - end(a) || order.get(a.id)! - order.get(b.id)!);
}

/** Index position as a short timecode: 4 -> "00:04". */
export function tc(index: number): string {
  return `00:${String(index).padStart(2, '0')}`;
}

export function years(w: Work): string {
  const { year, yearEnd } = w.data;
  return yearEnd ? `${year}–${String(yearEnd).slice(2)}` : String(year);
}

/** Prefix a site path with the base path (needed before the custom domain is live). */
export function href(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function workHref(w: Work): string {
  return href(`work/${w.id}/`);
}

export function embedUrl(w: Work): string | undefined {
  const v = w.data.video;
  if (!v) return;
  switch (v.provider) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${v.id}?dnt=1&title=0&byline=0&portrait=0`;
    case 'drive':
      return `https://drive.google.com/file/d/${v.id}/preview`;
  }
}

/** A still for previews: a frame from public/stills/, else the YouTube thumbnail, else none (a slate is drawn). */
export function stillUrl(w: Work): string | undefined {
  if (w.data.still) return href(`stills/${w.data.still}`);
  if (w.data.video?.provider === 'youtube') return `https://i.ytimg.com/vi/${w.data.video.id}/hqdefault.jpg`;
}
