import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { validateTransaction } from "./services/validator";
import TransactionItem from "./components/TransactionItem";
import { createClasses } from "./services/classService";
import CreateTransaction from "./components/CreateTransaction";
import EditTransactionForm from "./components/EditTransactionForm";

const initialTransactions = [
  {
    id: uuidv4(),
    payee: "7-11",
    category: "Food",
    amount: 200,
    date: "2022-08-17",
    type: "Expense"
  },
  {
    id: uuidv4(),
    payee: "Big C",
    category: "Grocery",
    amount: 555,
    date: "2022-08-14",
    type: "Expense"
  },
  {
    id: uuidv4(),
    payee: "Facebook",
    category: "Salary",
    amount: 2500,
    date: "2022-07-30",
    type: "Income"
  }
];

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const createTransaction = ({ payee, amount, date, type, category }) => {
    const newTransaction = {
      payee,
      amount,
      date,
      type,
      category,
      id: uuidv4()
    };
    const newTransactions = [...transactions, newTransaction];
    newTransactions.sort((a, b) => (b.date > a.date ? 1 : -1));
    setTransactions(newTransactions);
  };

  const deleteTransaction = (transactionId) => {
    const newTransactions = transactions.filter(
      (item) => item.id !== transactionId
    );
    setTransactions(newTransactions);
  };

  const updateTransaction = (transactionId, input) => {
    const newTransactions = transactions.map((item) =>
      item.id === transactionId ? { ...item, ...input } : item
    );
    setTransactions(newTransactions);
  };

  return (
    <div className="container" style={{ maxWidth: 768 }}>
      {editingTransaction ? (
        <EditTransactionForm
          transaction={editingTransaction}
          closeEditForm={() => setEditingTransaction(null)}
          deleteTransaction={deleteTransaction}
          updateTransaction={updateTransaction}
        />
      ) : (
        <CreateTransaction createTransaction={createTransaction} />
      )}
      {/* ********** End Create Form ********** */}

      {/* ********** Begin Transaction List ********** */}
      <ul className="list-group my-3">
        {transactions.map((item) => (
          <TransactionItem
            key={item.id}
            transaction={item}
            openEditForm={(editTransaction) => {
              setEditingTransaction(editTransaction);
            }}
          />
        ))}
      </ul>
      {/* ********** End Transaction List ********** */}
    </div>
  );
}

export default App;
