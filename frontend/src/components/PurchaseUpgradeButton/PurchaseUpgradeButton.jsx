import {React} from 'react';
import './PurchaseUpgradeButton.css';

export default function PurchaseButton(props) {
    const {upgrade, cost, onUpgradeBought} = props;

    function handleClick() {
        onUpgradeBought(upgrade);
    }

    function generateCost() {
        const number = Math.floor(cost);
        const formattedNumber = number.toLocaleString("en-US");
        return formattedNumber;
      }

    return (
        <div className="purchase-button">
            <button onClick={handleClick} className='upgrade-button'>{generateCost()}</button>
        </div>
    );
};