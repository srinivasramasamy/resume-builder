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
      </form>
    </div>
  );
}
