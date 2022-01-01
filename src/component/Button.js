


function Button({ color, text, onClick }) {
  return (
    <div>
      
      <button 
      onClick = {onClick}
      style={{ backgroundColor: color }}
      
      > {text} </button>
    </div>
  );
}

Button.defaultProps = {};

export default Button;
 
