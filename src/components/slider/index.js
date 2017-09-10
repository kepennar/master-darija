import { h, Component } from 'preact';

import Slide from './slide';

import style from './style';
import { slideStyle } from './dynStyle';

const _hammer = typeof window !== 'undefined' ? window.Hammer : null;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlideIndex: 0 };
  }

  sliderRef = slider => {
    if (this._hammer) {
      this._unregisterHammer();
    }
    if (slider) {
      this._hammer = _hammer(slider);
      this._hammer
        .get('swipe')
        .set({ direction: Hammer.DIRECTION_HORIZONTAL, domEvents: true });
      this._hammer.on('swipe', evt => {
        if (evt.direction === 2) {
          this.nextSlide();
        } else if (evt.direction === 4) {
          this.previousSlide();
        }
      });
      this._hammer.on('hammer.input', evt => {
        evt.srcEvent.stopPropagation();
      });
    }
  };

  _unregisterHammer() {
    if (this._hammer) {
      this._hammer.stop();
      this._hammer.destroy();
    }
    this._hammer = null;
  }

  previousSlide() {
    if (this.state.currentSlideIndex !== 0) {
      const newSlideIndex = this.state.currentSlideIndex - 1;
      this.setState({ currentSlideIndex: newSlideIndex });
      this.props.onSlideChange(newSlideIndex);
    }
  }
  nextSlide() {
    if (this.state.currentSlideIndex !== this.props.children.length - 1) {
      const newSlideIndex = this.state.currentSlideIndex + 1;
      this.setState({ currentSlideIndex: newSlideIndex });
      this.props.onSlideChange(newSlideIndex);
    }
  }

  forceReRender = () => {
    this.setState({ r: Math.random() });
  };

  componentDidMount() {
    window.addEventListener('orientationchange', this.forceReRender);
    window.addEventListener('resize', this.forceReRender);
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.forceReRender);
    window.removeEventListener('resize', this.forceReRender);
    this._unregisterHammer();
  }

  init() {
    this.setState({ currentSlideIndex: 0 });
  }

  render({ children, ref }, { currentSlideIndex, r }) {
    if (ref) {
      ref(this);
    }
    const { transform, width, margin, spacerWidth } = slideStyle(
      currentSlideIndex
    );

    const spacer = (
      <div class={style.slide}>
        <div style={{ width: spacerWidth }} />
      </div>
    );
    return (
      <div class={style.slider} ref={this.sliderRef}>
        <div class={style.sliderContainer} style={{ transform }}>
          {spacer}
          {children.map(c => (
            <Slide index={currentSlideIndex} width={width} margin={margin}>
              {c}
            </Slide>
          ))}
        </div>
      </div>
    );
  }
}
