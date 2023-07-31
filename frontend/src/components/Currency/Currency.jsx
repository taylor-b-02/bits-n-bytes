import {React} from 'react';
import './Currency.css';

export default function Currency(props) {
    const { currency } = props;
    return (
        <div className="currency">
            <h2 className="amount">{Math.floor(currency)} bytes</h2>
        </div>
    );
}