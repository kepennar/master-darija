if (typeof window !== 'undefined') {
  require('hammerjs');
}
export const getHammer = (domElem, options, handlers) => {
  const Hammer = typeof window !== 'undefined' ? window.Hammer : null;
  if (!Hammer) {
    return;
  }
  const hammerInstance = Hammer(domElem, options);
  hammerInstance.get('swipe').set(options);

  hammerInstance.on('swipe', evt => {
    if (evt.direction === 2 && handlers.onSwipeLeft) {
      handlers.onSwipeLeft();
    }
    if (evt.direction === 4 && handlers.onSwipeRight) {
      handlers.onSwipeRight();
    }
  });
  return hammerInstance;
};
