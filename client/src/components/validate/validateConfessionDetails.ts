export const error1 =
  "Your confession details must be between 20 and 100 characters.";
export const validateConfessionDetails: (
  confessionDetails: string
) => string[] = (confessionDetails) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const confessionDetailsLength = confessionDetails.length;

  if (
    (confessionDetailsLength > 0 && confessionDetailsLength < 20) ||
    confessionDetailsLength > 100
  )
    errMessage = [...errMessage, error1];

  return errMessage;
};
