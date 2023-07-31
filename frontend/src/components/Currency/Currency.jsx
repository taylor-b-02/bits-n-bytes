import {React} from 'react';
import './Currency.css';

export default function Currency(props) {
    const { currency, ratePerSecond } = props;
    return (
        <div className="currency">
            <h2 className="amount">{Math.floor(currency)} bytes</h2>
            <h3 className="per-second">{Math.floor(ratePerSecond * 10) / 10} bytes per second</h3>
        </div>
    );
}