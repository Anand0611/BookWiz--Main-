import PropTypes from "prop-types";

// Icons
import { XIcon, CheckIcon } from "@heroicons/react/solid";

const Popup = ({ message, statusCode }) => {
  let status;

  if (statusCode === 200) {
    status = "success";
  } else if (statusCode === 400) {
    status = "error";
  }

  const className = `popup ${status}`;

  return (
    <div className={className}>
      {status === "success" && <CheckIcon className="w-6 h-6 text-green-500" />}

      {status === "error" && <XIcon className="w-6 h-6 text-red-500" />}

      <p
        className={`${
          status === "success" ? "text-green-500" : "text-red-500"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  statusCode: PropTypes.oneOf([200, 400]).isRequired,
};

export default Popup;
