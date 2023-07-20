import {React} from 'react';
import './Page.css';
import Header from '../Header/Header';
import Generators from '../Generators/Generators';
import Clicker from '../Clicker/Clicker';
import Upgrades from '../Upgrades/Upgrades';

export default function Page() {
    return (
        <div className="page">
            <Header/>
            <Generators/>
            <Clicker/>
            <Upgrades/>
        </div>
    );
};