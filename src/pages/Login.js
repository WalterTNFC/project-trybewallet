import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { actionaddUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
      buttonDisable: true,
    };
  }

  buttonValidation = () => {
    const { email, password } = this.state;
    const validRegex = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;

    if (validRegex.test(email) && password.length >= minPasswordLength) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.buttonValidation();
    });
  }

  render() {
    const { email, password, redirect, buttonDisable } = this.state;
    const { user } = this.props;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ () => {
              user(email);
              this.setState({ redirect: true });
            } }
            disabled={ buttonDisable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

// Vai ser necessário apenas alterções das informações
// E não leitura, então o primeiro parametro do connect será null

const mapDispatchToProps = (dispatch) => ({
  user: (email) => dispatch(actionaddUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
