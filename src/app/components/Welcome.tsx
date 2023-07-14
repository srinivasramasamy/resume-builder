interface IProps {
  onStart: () => void;
}
function Welcome({ onStart }: IProps) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <div className="grid">
        <div className="row">
          <div className="col-12">
            <p>Start building your resume</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              id="start"
              type="button"
              className="btn btn-dark"
              onClick={onStart}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
