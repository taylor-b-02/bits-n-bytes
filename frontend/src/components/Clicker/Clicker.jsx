import {React} from 'react';
import './Clicker.css';

export default function Clicker(props) {
    const { clickValue, handleClick, clickMult, globalMult } = props;


    return (
        <div className="clicker">
            <button onClick={handleClick}>{clickValue}</button>
        </div>
    );
}