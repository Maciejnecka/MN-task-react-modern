import React from 'react';
import Column from '../column/Column';
import { useAppContext } from '../app/App';
import Form from '../form/Form';

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
