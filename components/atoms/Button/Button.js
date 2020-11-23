import PropTypes from 'prop-types'

export const Button = ({ colorSet, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={`px-5 py-3 border border-transparent rounded-md ${colorSet} ${size} font-medium `}
      {...props}
    >
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
  colorSet: 'text-white bg-indigo-600 hover:bg-indigo-700',
  size: 'text-sm',
  onClick: undefined,
};