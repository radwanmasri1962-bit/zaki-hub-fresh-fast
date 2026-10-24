export const FEATURED_ROTATION_MS = 4000;

export function nextFeaturedIndex(index: number, direction: number, count: number) {
  return (index + direction + count) % count;
}

export function canRotateFeatured({ inView, tabActive, reducedMotion, paused, hovered, focused }: {
  inView: boolean; tabActive: boolean; reducedMotion: boolean;
  paused: boolean; hovered: boolean; focused: boolean;
}) {
  return inView && tabActive && !reducedMotion && !paused && !hovered && !focused;
}