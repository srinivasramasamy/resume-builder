export default function Heading() {
  return (
    <div className="container">
      <h1>Heading</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="lasttName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input type="text" className="form-control" id="state" />
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="zip" />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input type="number" className="form-control" id="phone" />
        </div>
      </form>
    </div>
  );
}
