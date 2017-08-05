import style from './style';

export default ({
  imgSrc,
  translations: { arabic, darija, english },
  className
}) =>
  <div class={`${style.container} ${className}`}>
    <img src={imgSrc} class={style.img} />
    <div class={style.texts}>
      <div>
        {arabic}
      </div>
      <div class={style.emphase}>
        {darija}
      </div>
      <div>
        {english}
      </div>
    </div>
  </div>;
