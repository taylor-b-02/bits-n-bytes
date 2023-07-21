import {React} from 'react';
import './PurchaseGeneratorButton.css';

export default function PurchaseGeneratorButton(props) {
    const {generator, cost, onGeneratorBought} = props;

    function handleClick() {
        onGeneratorBought(generator);
    }

    return (
        <div className="purchase-button">
            <button onClick={handleClick}>{Math.floor(cost)}</button>
        </div>
    );
};