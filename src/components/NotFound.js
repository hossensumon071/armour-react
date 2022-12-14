const NotFound = ({ needFullHeight }) => {
  return (
    <di className={`${needFullHeight && "min-h-scrren"} wrapper not-found`} >
      <h1>404<br />Not Found</h1>
    </di>
  );
};

export default NotFound;
