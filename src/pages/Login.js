import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import actionaddEmail from '../actions';

const MAXPASSWORDVALUE = 6;
const TESTEMAIL = 'XXXXXXXXXXXX';

class Login extends React.Component {
  constructor() {
    super();
    this.stat = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleOnClick() {
    const { addEmail } = this.props;
    const { email } = this.state;
    addEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <div>
        {(redirect === true) && <Redirect to="carteira" />}
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
            data-testid="password"
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !(TESTEMAIL.test(email) && password.lenght >= MAXPASSWORDVALUE) }
            onClick={ this.handleOnClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

// Vai ser necessário apenas alterções das informações
// E não leitura, então o primeiro parametro do connect será null

const mapDispatchToProps = (dispatch) => ({
  dispatchAction: (value) => dispatch(actionaddEmail(value)),
});

export default (null, mapDispatchToProps)(Login);
