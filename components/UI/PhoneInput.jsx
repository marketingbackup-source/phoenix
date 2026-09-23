"use client";

import { Controller } from "react-hook-form";

import PhoneInput from "react-phone-number-input/max";

import {
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js/max";

import "react-phone-number-input/style.css";


export default function BasePhoneInput({
  name,
  control,
  error,
}) {

  function getValidationMessage(value) {

    if (!value) {
      return "Please enter your phone number";
    }


    const lengthError =
      validatePhoneNumberLength(value);


    if (lengthError === "TOO_SHORT") {
      return "Phone number is too short";
    }


    if (lengthError === "TOO_LONG") {
      return "Phone number is too long";
    }


    if (lengthError === "INVALID_LENGTH") {
      return "Please enter a valid phone number length";
    }


    if (
      lengthError === "INVALID_COUNTRY" ||
      lengthError === "NOT_A_NUMBER"
    ) {
      return "Please enter a valid phone number";
    }


    if (!isValidPhoneNumber(value)) {
      return "Please enter a valid phone number";
    }


    return true;
  }


  return (
    <div>

      <Controller
        name={name}
        control={control}

        rules={{
          validate: getValidationMessage,
        }}

        render={({ field }) => (
          <PhoneInput
            value={field.value || undefined}

            defaultCountry="IN"

            international

            countryCallingCodeEditable={false}

            limitMaxLength

            placeholder="Phone"

            onChange={field.onChange}

            onBlur={field.onBlur}

            className="phone-input-wrapper"
          />
        )}

      />


      {error && (
        <p
          role="alert"
          className="
            mt-2
            text-sm
            text-[var(--color-red-1)]
          "
        >
          {error.message}
        </p>
      )}

    </div>
  );
}