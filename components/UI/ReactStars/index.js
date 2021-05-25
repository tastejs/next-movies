
/**
 * MEMO: inspired by https://github.com/n49/react-stars.
 * TODO: should be improved (code-standard & code-size) based on a functional component.
 * TODO: more delicate fractional star instead of just a half star
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const parentStyles = {
  overflow: 'hidden',
  position: 'relative'
};

const defaultStyles = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left'
};

const getHalfStarStyles = (color, uniqueness) => {
  return `
    .react-stars-${uniqueness}:before {
      position: absolute;
      overflow: hidden;
      display: block;
      z-index: 1;
      top: 0; left: 0;
      width: 50%;
      content: attr(data-forhalf);
      color: ${color};
  }`
};

class ReactStars extends Component {
  constructor(props) {
    super(props)

    // set defaults
    props = Object.assign({}, props);

    this.state = {
      uniqueness: (Math.random() + '').replace('.', ''),
      value: props.value || 0,
      stars: [],
      halfStar: {
        at: Math.floor(props.value),
        hidden: props.half && props.value % 1 < 0.5
      }
    };

    this.state.config = {
      count: props.count,
      size: props.size,
      char: props.char,
      // default color of inactive star
      color1: props.color1,
      // color of an active star
      color2: props.color2,
      half: props.half,
      edit: props.edit
    };
  }

  componentDidMount() {
    this.setState({
      stars: this.getStars(this.state.value)
    });
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      stars: this.getStars(props.value),
      value: props.value,
      halfStar: {
        at: Math.floor(props.value),
        hidden: this.state.config.half && props.value % 1 < 0.5
      },
      config: Object.assign({}, this.state.config, {
        count: props.count,
        size: props.size,
        char: props.char,
        color1: props.color1,
        color2: props.color2,
        half: props.half,
        edit: props.edit
      })
    });
  }

  isDecimal(value) {
    return value % 1 !== 0;
  }

  getRate() {
    let stars;
    if (this.state.config.half) {
      stars = Math.floor(this.state.value);
    } else {
      stars = Math.round(this.state.value);
    }
    return stars;
  }

  getStars(activeCount) {
    if (typeof activeCount === 'undefined') {
      activeCount = this.getRate();
    }
    let stars = [];
    for (let i = 0; i < this.state.config.count; i++) {
      stars.push({
        active: i <= activeCount - 1
      });
    }
    return stars;
  }

  mouseOver(event) {
    let { config, halfStar } = this.state;
    if (!config.edit) return;
    let index = Number(event.target.getAttribute('data-index'));
    if (config.half) {
      const isAtHalf = this.moreThanHalf(event, config.size);
      halfStar.hidden = isAtHalf;
      if (isAtHalf) index = index + 1;
      halfStar.at = index;
    } else {
      index = index + 1;
    }
    this.setState({
      stars: this.getStars(index)
    });
  }

  moreThanHalf(event, size) {
    let { target } = event;
    var mouseAt = event.clientX - target.getBoundingClientRect().left;
    mouseAt = Math.round(Math.abs(mouseAt));
    return mouseAt > size / 2;
  }

  mouseLeave() {
    const { value, halfStar, config } = this.state;
    if (!config.edit) return;
    if (config.half) {
      halfStar.hidden = !this.isDecimal(value);
      halfStar.at = Math.floor(this.state.value);
    }
    this.setState({
      stars: this.getStars()
    });
  }

  clicked(event) {
    const { config, halfStar } = this.state;
    if (!config.edit) return;
    let index = Number(event.target.getAttribute('data-index'));
    let value;
    if (config.half) {
      const isAtHalf = this.moreThanHalf(event, config.size);
      halfStar.hidden = isAtHalf;
      if (isAtHalf) index = index + 1;
      value = isAtHalf ? index : index + .5;
      halfStar.at = index;
    } else {
      value = index = index + 1;
    }
    this.setState({
      value: value,
      stars: this.getStars(index)
    });
    this.props.onChange(value);
  }

  renderHalfStarStyleElement() {
    const { config, uniqueness } = this.state;
    return (
      <style dangerouslySetInnerHTML={{
        __html: getHalfStarStyles(config.color2, uniqueness)
      }}></style>
    )
  }

  renderStars() {
    const { halfStar, stars, uniqueness, config } = this.state;
    const { color1, color2, size, char, half, edit } = config;
    return stars.map((star, i) => {
      let starClass = '';
      if (half && !halfStar.hidden && halfStar.at === i) {
        starClass = `react-stars-${uniqueness}`;
      }
      const style = Object.assign({}, defaultStyles, {
        color: star.active ? color2 : color1,
        // TODO: always pointer
        // cursor: edit ? 'pointer' : 'default',
        cursor: edit ? 'pointer' : 'pointer',
        fontSize: `${size}px`
      });
      return (
        <span
          className={starClass}
          style={style}
          key={i}
          data-index={i}
          data-forhalf={char}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseMove={this.mouseOver.bind(this)}
          onMouseLeave={this.mouseLeave.bind(this)}
          onClick={this.clicked.bind(this)}>
          {char}
        </span>
      );
    });
  }

  render() {
    const {
      className
    } = this.props;

    return (
      <div className={className} style={parentStyles}>
        {this.state.config.half ?
          this.renderHalfStarStyleElement() : ''}
        {this.renderStars()}
      </div>
    );
  }
}

ReactStars.propTypes = {
  className: PropTypes.string,
  edit: PropTypes.bool,
  half: PropTypes.bool,
  value: PropTypes.number,
  count: PropTypes.number,
  char: PropTypes.string,
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string
};

ReactStars.defaultProps = {
  edit: true,
  half: true,
  value: 0,
  count: 5,
  char: '★',
  size: 15,
  color1: 'gray',
  color2: '#ffd700',

  onChange: () => {}
};

export default ReactStars;
