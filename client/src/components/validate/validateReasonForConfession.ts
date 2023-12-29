export const error1 = "Please select a reason for contact.";

export const validateReasonForContact: (
  reasonForContact: string
) => string[] = (reasonForContact) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  if (reasonForContact === "blank") {
    errMessage = [...errMessage, error1];
  }

  return errMessage;
};
