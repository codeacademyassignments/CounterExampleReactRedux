import React, { Component } from 'react';
import './Button.css';



      class Button extends Component {
        render() {
          console.log(this.props);
          return (
            <button type="button" className = "style"  onClick={this.props.onClick}>{this.props.buttonText}</button>
            
          );
        }
      }

      export default Button;