import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const INITIAL_VALUE = 0;

class Wallet extends React.Component {
  render() {
    const { emailField, totalValue } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            { emailField }
          </p>
          <p data-testid="total-field">
            { totalValue || INITIAL_VALUE }
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
  totalValue: state.wallet.totalValue,
});

Wallet.propTypes = {
  emailField: PropTypes.func.isRequired,
  totalValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
