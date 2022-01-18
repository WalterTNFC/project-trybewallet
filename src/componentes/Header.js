import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const INITIAL_VALUE = 0;

class Wallet extends React.Component {
  render() {
    const { emailField, total } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            { emailField }
          </p>
          <p data-testid="total-field">
            { total || INITIAL_VALUE }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        TrybeWallet!
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailField: state.user.email,
  total: state.Wallet.totalValue,
});

Wallet.propTypes = {
  emailField: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
