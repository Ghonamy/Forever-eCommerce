const SpinnerLoading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
      <div
        className="spinner-border text-dark"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerLoading;
