import React from 'react';
import Column from './Column';
import { useAppContext } from './App';
import Form from './Form';

function Board() {
    const { columns } = useAppContext();

    return (
        <>
            <Form />
            <div className="board">
                {columns.map((column) => (
                    <Column key={column.id} column={column} />
                ))}
            </div>
        </>
    );
}

export default Board;
