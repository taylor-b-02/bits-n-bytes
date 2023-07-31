import {React} from 'react';
import './PurchaseUpgradeButton.css';

export default function PurchaseButton(props) {
    const {upgrade, cost, onUpgradeBought} = props;

    function handleClick() {
        onUpgradeBought(upgrade);
    }
    return (
        <div className="purchase-button">
            <button onClick={handleClick}>{Math.floor(cost)}</button>
        </div>
    );
};