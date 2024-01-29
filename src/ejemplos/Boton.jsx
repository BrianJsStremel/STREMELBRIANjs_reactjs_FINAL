
const Boton = ({ children, className = "", onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full py-2 px-4 text-black font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Boton;