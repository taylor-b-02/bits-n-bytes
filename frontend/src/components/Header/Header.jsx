import {React} from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Currency from '../Currency/Currency';

export default function Header(props) {
    const { currency } = props;
    return (
       <div className="header">
        <Logo/>
        <h1 className="title">Bits <span style={{ color: 'green' }}>&</span> Bytes</h1>
        <Currency
            currency={currency}
        />
       </div>
    );
}