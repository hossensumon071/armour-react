const NotFound = ({ needFullHeight }) => {
  return (
    <div className={`${needFullHeight && "min-h-scrren"} wrapper not-found`} >
      <h1>404<br />Not Found</h1>
    </div>
  );
};

export default NotFound;
