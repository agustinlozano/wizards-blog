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

export default FormField
