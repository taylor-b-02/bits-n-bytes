import {React} from 'react';
import PurchaseButton from '../PurchaseButton/PurchaseButton';
import UpgradePhoto from '../UpgradePhoto/UpgradePhoto';

export default function Upgrade() {
    return (
        <div className="upgrade">
            <UpgradePhoto/>
            <PurchaseButton/>
        </div>
    );
};