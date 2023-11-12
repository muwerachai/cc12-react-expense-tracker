import { useEffect, useState } from "react";
const expenses = ["Food", "Grocery", "Health", "Transport", "Utilities"];
const incomes = ["Investment", "Lotto", "Salary", "Wage"];

function EditTransactionForm(props) {
  const [input, setInput] = useState({
    payee: props.transaction.payee,
    amount: props.transaction.amount,
    date: props.transaction.date,
    category: props.transaction.category,
    type: props.transaction.type
  });

  const handleChangeInput = (event) => {
    const newInput = { ...input };
    newInput[event.target.name] = event.target.value;
    if (event.target.name === "type") {
      newInput.category =
        event.target.value === "Expense" ? expenses[0] : incomes[1];
    }
    setInput(newInput);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // validate input

    // validate success
    props.updateTransaction(props.transaction.id, input);
    props.closeEditForm();
  };

  return (
    <div className="bg-white p-3 rounded-2 my-3" onSubmit={handleSubmitForm}>
      <form className="row g-3">
        {/* ********** Begin Radio Button: Expense or Income ********** */}
        <div className="col-12">
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              id="cbx-expense"
              name="type"
              value="Expense"
              checked={input.type === "Expense"}
              onChange={handleChangeInput}
            />
            <label className="btn btn-outline-danger" htmlFor="cbx-expense">
              Expense
            </label>
            <input
              type="radio"
              className="btn-check"
              id="cbx-income"
              name="type"
              value="Income"
              checked={input.type === "Income"}
              onChange={handleChangeInput}
            />
            <label className="btn btn-outline-success" htmlFor="cbx-income">
              Income
            </label>
          </div>
        </div>
        {/* ********** End Radio Button: Expense or Income ********** */}

        {/* ********** Begin Input: Payee ********** */}
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input
            type="text"
            className="form-control"
            name="payee"
            value={input.payee}
            onChange={handleChangeInput}
          />
        </div>
        {/* ********** End Input: Payee ********** */}

        {/* ********** Begin Select: Category ********** */}
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            name="category"
            value={input.category}
            onChange={handleChangeInput}
          >
            {(input.type === "Expense" ? expenses : incomes).map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
          </select>
        </div>
        {/* ********** End Select: Category ********** */}

        {/* ********** Begin Input: Amount ********** */}
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input
            type="text"
            className="form-control"
            name="amount"
            value={input.amount}
            onChange={handleChangeInput}
          />
        </div>
        {/* ********** End Input: Amount ********** */}

        {/* ********** Begin Input: Date ********** */}
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={input.date}
            onChange={handleChangeInput}
          />
        </div>
        {/* ********** End Input: Date ********** */}

        {/* ********** Begin Form Button ********** */}
        <div className="col-12">
          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-primary">Save</button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={props.closeEditForm}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => {
                props.deleteTransaction(props.transaction.id);
                props.closeEditForm();
              }}
            >
              Delete
            </button>
          </div>
        </div>
        {/* ********** End Form Button ********** */}
      </form>
    </div>
  );
}
export default EditTransactionForm;
