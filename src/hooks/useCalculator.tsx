import { useRef, useState } from 'react';

enum Op {
    Add,
    Substract,
    Multiply,
    Divide,
}

export const useCalculator = () => {

    const [memory, setMemory] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOp = useRef<Op>();

    const handleReset = () => {
        setMemory('0');
        setNumber('0');
    };

    const handleSign = () => {
        // si el valor es 0 o 0.0, no se modifica signo
        if (Number(number) + 1 === 1) { return; }
        number.includes('-') ?
            setNumber(number.replace('-', ''))
            : setNumber('-' + number);
    };

    const handleDelete = () => {
        // si borra el ultimo o queda el negativo, lo pone en 0
        number.length === 1 || (number.length === 2 && number.includes('-'))
            ? setNumber('0')
            : setNumber(number.slice(0, -1));
    };

    const handleOp = (op: string) => {
        // si el valor es 0 o 0.0, no se toma la operación
        if (Number(number) + 1 === 1) { return; }
        handleResolve();
        switch (op) {
            case '+':
                lastOp.current = Op.Add;
                break;
            case '-':
                lastOp.current = Op.Substract;
                break;
            case 'x':
                lastOp.current = Op.Multiply;
                break;
            case '÷':
                lastOp.current = Op.Divide;
                break;
            default:
                break;
        }
        const memoNumber: string = number.endsWith('.')
            ? number.slice(0, -1)
            : number;
        setMemory(memoNumber);
        setNumber('0');
    };

    const handleNumber = (num: string) => {
        // no aceptar doble punto
        if (num === '.' && number.includes('.')) { return; }
        // solo se concatena si no empieza con 0, salvo que sea 0. ...
        number !== '0' || num === '.'
            ? setNumber(number + num)
            : setNumber(num);
    };

    const handleResolve = () => {
        const num1: number = Number(memory);
        const num2: number = Number(number);
        switch (lastOp.current) {
            case Op.Add:
                setNumber(`${ num1 + num2 }`);
                break;
            case Op.Substract:
                setNumber(`${ num1 - num2 }`);
                break;
            case Op.Multiply:
                setNumber(`${ num1 * num2 }`);
                break;
            case Op.Divide:
                num2 !== 0
                    ? setNumber(`${ num1 / num2 }`)
                    : setNumber('0');
                break;
            default:
                break;
        }
        lastOp.current = undefined;
        setMemory('0');
    };

    return {
        number,
        memory,
        handleReset,
        handleSign,
        handleDelete,
        handleNumber,
        handleOp,
        handleResolve,
    };

};

