import {React} from 'react';
import './Clicker.css';

export default function Clicker(props) {
    const { clickValue, onClick } = props;

    function handleClick() {
        onClick();
    }

    return (
        <div className="clicker">
            <button onClick={handleClick}>{clickValue}</button>
        </div>
    );
}