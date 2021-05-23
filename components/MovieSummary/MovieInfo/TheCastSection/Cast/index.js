
import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';

import ArrowIcon from './ArrowIcon';
import PersonLink from './PersonLink';
import ARROW_DIRECTIONS from 'utils/constants/arrow-directions';

const Cast = ({
  className,
  cast,
  baseUrl
}) => {
  const [slidesToShow, setSlidesToShow] = useState(null);
  const ref = useRef(null);

  const changeSlidesToShow = () => {
    // TODO: hardcoded 70
    let numberOfPersonSpaces = Math.round(ref.current.offsetWidth / 70);
    if (numberOfPersonSpaces > cast.length) {
      numberOfPersonSpaces = cast.length;
    }
    setSlidesToShow(numberOfPersonSpaces);
  };

  useEffect(() => {
    changeSlidesToShow();
    window.addEventListener('resize', changeSlidesToShow);
    return () => window.removeEventListener('resize', changeSlidesToShow);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <ArrowIcon direction={ARROW_DIRECTIONS.LEFT} />,
    nextArrow: <ArrowIcon direction={ARROW_DIRECTIONS.RIGHT} />
  };

  return (
    <div
      className={className}
      ref={ref}>
      <Slider {...sliderSettings}>
        {cast.map(person => (
          <PersonLink
            key={person.id}
            person={person}
            baseUrl={baseUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default Cast;
