import {React} from 'react';
import './Generators.css';
import Generator from '../Generator/Generator';

export default function Generators(props) {
    const {generators, onGeneratorBought} = props;
    return (
        <div className="generators">
            {generators.map((generator) => {
                return (
                    <Generator
                        key={generator.name}
                        generator={generator}
                        onGeneratorBought={onGeneratorBought}
                    />
                );
            })}
        </div>
    );
};