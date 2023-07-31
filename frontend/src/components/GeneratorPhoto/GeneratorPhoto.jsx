import {React} from 'react';
import './GeneratorPhoto.css';


export default function GeneratorPhoto(props) {
    const { generator } = props;

    return (
        <div className="generator-photo">
            <img src={generator.URL} alt="html" />
        </div>
    );
};