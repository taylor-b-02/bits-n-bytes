import {React} from 'react';
import './Generator.css';
import GeneratorPhoto from '../GeneratorPhoto/GeneratorPhoto';
import PurchaseButton from '../PurchaseButton/PurchaseButton';

export default function Generator() {
    return (
        <div className="generator">
            <GeneratorPhoto/>
            I am a generator
            <PurchaseButton/>
        </div>
    );
};