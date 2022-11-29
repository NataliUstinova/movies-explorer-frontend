import { useCallback, useState } from "react";

export default function useValidation({ form }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const eventTarget = e.target;
    const message = eventTarget.validationMessage;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]: message,
    });
    if (eventTarget.validity.patternMismatch) {
      setErrors({ ...errors, [name]: eventTarget.title });
    }
    if (form === "editProfile") {
      setIsDisabled(eventTarget.closest(".profile__edit-form").checkValidity());
    } else {
      setIsDisabled(eventTarget.closest(".form__form").checkValidity());
    }
  }

  const resetForm = useCallback(
    (blankValues = {}, blankErrors = {}, defaultDisabled = false) => {
      setValues(blankValues);
      setErrors(blankErrors);
      setIsDisabled(defaultDisabled);
    },
    [setValues, setErrors, setIsDisabled]
  );

  return { values, errors, isDisabled, handleInputChange, resetForm };
}
