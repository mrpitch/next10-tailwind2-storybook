import PropTypes from 'prop-types'

export const Button = ({ colorSet, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={`btn ${colorSet} ${size}`}
      {...props}
    >
      {label}
    </button>
  
  )
}

Button.propTypes = {
  /**
   * Type
   */
  colorSet: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['text-sm', 'text-base', 'text-lg']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  colorSet: 'btn--primary',
  size: 'text-sm',
  label: 'Click Me!',
  onClick: undefined,
};