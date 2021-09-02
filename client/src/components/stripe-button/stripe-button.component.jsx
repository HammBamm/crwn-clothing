import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JSewACXT2SX0WETBQGYDPDqb7StoLbh75J70uUMNwXzHB5KWh5MiwJxUOtLzReEZp3yxlfE4vrlawxt1mOZIULl00ErCgfHeL';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment failed with error: ', JSON.parse(error));
            alert('Payment failed. Please make sure you use the provided credit card.');
        })
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