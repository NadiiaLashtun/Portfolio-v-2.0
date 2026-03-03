function Wrapper({ children, className = '' }) {
  return (
    <div className={`px-6 sm:px-16 min-w-72 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Wrapper;
