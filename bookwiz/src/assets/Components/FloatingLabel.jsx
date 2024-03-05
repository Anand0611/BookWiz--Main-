import { useState } from 'react';

export default function FloatingLabelInput({ label, error,touched, ...inputProps }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        {...inputProps}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => this.props.onChange(e.target.value)}
        className="peer w-full border-b border-gray-500 pt-5 pb-2 focus:outline-none focus:border-blue-600 dark:border-gray-700 dark:focus:border-blue-500"
      />{error && touched ? (<p className="text-red-500 ml-3 text-[13px]">{error}</p>):null}
      <label
        className={`absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
          focused ? "text-blue-600 dark:text-blue-500" : "text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

import PropTypes from "prop-types";

FloatingLabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched : PropTypes.bool,
};
