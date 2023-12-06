import React from 'react';
import Column from './Column';
import { useAppContext } from './App';

function Board() {
    const { columns } = useAppContext();

    return (
        <div className="board">
            {columns.map((column) => (
                <Column key={column.id} column={column} />
            ))}
        </div>
    );
}

export default Board;
