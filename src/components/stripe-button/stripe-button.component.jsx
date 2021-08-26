import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSewACXT2SX0WETBQGYDPDqb7StoLbh75J70uUMNwXzHB5KWh5MiwJxUOtLzReEZp3yxlfE4vrlawxt1mOZIULl00ErCgfHeL';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is €€{price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    );
};

export default StripeCheckoutButton;