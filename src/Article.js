import React from 'react';
import PropTypes from 'prop-types';


class Article extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    if (e.target.id === "add") {
      this.setState({
        count: this.state.count + 1
      })
    } else if (e.target.id === "substract" && this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      })
    }
}


  render() {
    return (

      <div className="container-item">

          <div>
            <img className="img-responsive" src={this.props.image} alt="" />
          </div>

          <p>
            {this.props.nombre}
          </p>

          <div className="margin">
            <input className="input" id="test" type="number" placeholder="1"/>
          </div>

          <p className="margin" >
            {this.props.comment}
          </p>

          <p className="margin">
            {this.state.count * this.props.price + "€"}
          </p>

          <button className="button margin" id = "add" onClick = {this.handleClick} classList="color-font">
          +
          </button >

          <button className="button margin" id = "substract" onClick = {this.handleClick} classList="color-font">
          -
          </button >

          <button className="button margin" id = "reset" onClick = {this.handleClick} classList="color-font">
          reset
          </button >

      </div>

    );
  }
}

export default Article;
