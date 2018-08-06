const MIN_SLIDE_WIDTH = 100; // px
const RESPONSIVE_SLIDE_WIDTH_PERCENT = 70; // %
const EXCEED_PERCENT = 10; // %
const MAX_WIDTH = 1080; // px

export const slideStyle = index => {
  const windowWidth = Math.min(window.innerWidth, MAX_WIDTH);
  const processedWidth = Math.max(
    windowWidth * (RESPONSIVE_SLIDE_WIDTH_PERCENT / 100),
    MIN_SLIDE_WIDTH
  );

  const exceeding = windowWidth * (EXCEED_PERCENT / 100);
  const margin = (windowWidth - processedWidth - exceeding) / 4;
  const spacer = margin + exceeding / 4;
  const translation = (windowWidth - (margin * 2 + exceeding)) * index;

  return {
    transform: `translateX(-${translation}px)`,
    width: `${processedWidth}px`,
    margin: `0 ${margin}px`,
    spacerWidth: `${spacer}px`
  };
};
