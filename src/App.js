function App() {
  return (
    <div className="container" style={{ maxWidth: 768 }}>
      {/* ********** Begin Create Form ********** */}
      <div className="bg-white p-3 rounded-2 my-3">
        <form className="row g-3">
          {/* ********** Begin Radio Button: Expense or Income ********** */}
          <div className="col-12">
            <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
              />
              <label className="btn btn-outline-danger" htmlFor="cbx-expense">
                Expense
              </label>
              <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
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
            <input type="text" className="form-control" />
          </div>
          {/* ********** End Input: Payee ********** */}

          {/* ********** Begin Select: Category ********** */}
          <div className="col-sm-6">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option>Food</option>
              <option>Investment</option>
              <option>Salary</option>
              <option>Transport</option>
            </select>
          </div>
          {/* ********** End Select: Category ********** */}

          {/* ********** Begin Input: Amount ********** */}
          <div className="col-sm-6">
            <label className="form-label">Amount</label>
            <input type="text" className="form-control" />
          </div>
          {/* ********** End Input: Amount ********** */}

          {/* ********** Begin Input: Date ********** */}
          <div className="col-sm-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>
          {/* ********** End Input: Date ********** */}

          {/* ********** Begin Form Button ********** */}
          <div className="col-12">
            <div className="mt-3 d-flex gap-3">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-outline-secondary">Cancel</button>
              <button className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
          {/* ********** End Form Button ********** */}
        </form>
      </div>
      {/* ********** End Create Form ********** */}

      {/* ********** Begin Transaction List ********** */}
      <ul className="list-group my-3">
        {/* ********** Transaction Item #1 ********** */}
        <li className="list-group-item d-flex callout-danger">
          <div className="d-flex flex-grow-1 gap-4" role="button">
            {/* ********** Begin Transaction Date #1 ********** */}
            <div
              className="border border-dark rounded-2 bg-warning p-2 text-center"
              style={{ width: "3.75rem" }}
            >
              <p className="m-0 text-black-50" style={{ fontSize: "0.75rem" }}>
                Aug 22
              </p>
              <p className="m-0">12</p>
            </div>
            {/* ********** End Transaction Date #1 ********** */}

            <div className="d-flex align-items-center flex-grow-1">
              {/* ********** Begin Transaction Detail #1 ********** */}
              <div className="flex-grow-1">
                <p className="mb-1 fw-bold">7-11</p>
                <p
                  className="mb-0 text-black-50"
                  style={{ fontSize: "0.75rem" }}
                >
                  Food
                </p>
              </div>
              {/* ********** End Transaction Detail #1 ********** */}

              {/* ********** Begin Transaction Amount #1 ********** */}
              <span className="badge text-bg-danger">126.00</span>
              {/* ********** End Transaction Amount #1 ********** */}
            </div>
          </div>
        </li>
        {/* ********** End Transaction Item #1 ********** */}

        {/* ********** Transaction Item #2 ********** */}
        <li className="list-group-item d-flex callout-danger">
          <div className="d-flex flex-grow-1 gap-4" role="button">
            <div
              className="border border-dark rounded-2 bg-warning p-2 text-center"
              style={{ width: "3.75rem" }}
            >
              <p className="m-0 text-black-50" style={{ fontSize: "0.75rem" }}>
                Aug 22
              </p>
              <p className="m-0">5</p>
            </div>

            <div className="d-flex align-items-center flex-grow-1">
              <div className="flex-grow-1">
                <p className="mb-1 fw-bold">Bts</p>
                <p
                  className="mb-0 text-black-50"
                  style={{ fontSize: "0.75rem" }}
                >
                  Transport
                </p>
              </div>
              <span className="badge text-bg-danger">49.00</span>
            </div>
          </div>
        </li>
        {/* ********** End Transaction Item #2 ********** */}

        {/* ********** Transaction Item #3 ********** */}
        <li className="list-group-item d-flex callout-success">
          <div className="d-flex flex-grow-1 gap-4" role="button">
            <div
              className="border border-dark rounded-2 bg-warning p-2 text-center"
              style={{ width: "3.75rem" }}
            >
              <p className="m-0 text-black-50" style={{ fontSize: "0.75rem" }}>
                Jul 22
              </p>
              <p className="m-0">30</p>
            </div>

            <div className="d-flex align-items-center flex-grow-1">
              <div className="flex-grow-1">
                <p className="mb-1 fw-bold">Ptt</p>
                <p
                  className="mb-0 text-black-50"
                  style={{ fontSize: "0.75rem" }}
                >
                  Investment
                </p>
              </div>
              <span className="badge text-bg-success">4,000.00</span>
            </div>
          </div>
        </li>
        {/* ********** End Transaction Item #3 ********** */}
      </ul>
      {/* ********** End Transaction List ********** */}
    </div>
  );
}

export default App;
