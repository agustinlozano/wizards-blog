import propTypes from 'prop-types'

const FormField = ({ type, name, value, placeholder, handleChange }) =>
  <>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  </>

FormField.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string,
  value: propTypes.string.isRequired,
  placeholder: propTypes.string,
  handleChange: propTypes.func.isRequired
}

export default FormField
