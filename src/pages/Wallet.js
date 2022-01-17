import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailField } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            {emailField}
          </p>
          <p data-testid="total-field">
            0
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
});

Wallet.propTypes = {
  emailField: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
