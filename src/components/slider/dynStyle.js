const MIN_SLIDE_WIDTH = 300; // px
const RESPONSIVE_SLIDE_WIDTH_PERCENT = 80; // %
const EXCEED_PERCENT = 5; // %

export const slideStyle = index => {
  const windowWidth = window.innerWidth;
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
