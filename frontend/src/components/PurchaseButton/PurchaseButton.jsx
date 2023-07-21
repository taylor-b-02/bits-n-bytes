import {React} from 'react';
import './PurchaseButton.css';

export default function PurchaseButton(props) {
    const {generator, currency, cost, onGeneratorBought} = props;

    function handleClick() {
        console.log("Purchase button clicked")
        onGeneratorBought(generator);
    }

    return (
        <div className="purchase-button">
            <button onClick={handleClick}>Purchase</button>
        </div>
    );
};