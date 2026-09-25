import { parsePhoneNumber } from "libphonenumber-js/max";


export function formatPhoneForLSQ(value = "") {

  if (!value) {
    return "";
  }


  try {

    const phoneNumber = parsePhoneNumber(value);


    if (!phoneNumber) {
      return value;
    }


    return `+${phoneNumber.countryCallingCode}-${phoneNumber.nationalNumber}`;


  } catch {

    return value;

  }

}