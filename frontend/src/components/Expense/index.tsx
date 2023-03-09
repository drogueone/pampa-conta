import React from 'react';
import './styles.css'
import { Trash } from '@phosphor-icons/react';

interface ExpenseProps {
    onClick: () => void;
    title: string;
    expiration: String;
    price: string;
    status: string;
}

const Expense: React.FC<ExpenseProps> = ({ onClick, title, expiration, price, status }) => {
  return (
    <div
        className='expense-card'
        onClick={onClick}
    >
        <Trash size={18} color={'#8895A6'} />
        <div className="card-container-title">
            <p className="card-title">{title}</p>
            <span>{expiration}</span>
        </div>
        <div className="card-container-price">
            <p className="card-price">{price}</p>
            <span>{status}</span>
        </div>
    </div>
  );
};

export default Expense;