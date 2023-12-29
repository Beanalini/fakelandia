export const error1 =
  "Your confession details must be between 20 and 200 characters.";
export const validateConfessionDetails: (
  confessionDetails: string
) => string[] = (confessionDetails) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const planetNameLength = confessionDetails.length;

  if ((planetNameLength > 0 && planetNameLength < 20) || planetNameLength > 200)
    errMessage = [...errMessage, error1];

  return errMessage;
};
