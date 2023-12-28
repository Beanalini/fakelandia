export const error1 = "only characters allowed!";
export const error2 = "Subject must be between 5 and 25 characters only!";

export const validateConfessionSubject: (
  confessionSubject: string
) => string[] = (confessionSubject) => {
  //declare errorMessage array using the array constructor
  let errMessage = Array<string>();

  const pattern = /[^a-zA-Z\s]/;

  if (pattern.test(confessionSubject)) {
    errMessage = [...errMessage, error1];
  }
  if (
    (confessionSubject.length > 0 && confessionSubject.length < 5) ||
    confessionSubject.length > 25
  )
    errMessage = [...errMessage, error2];

  return errMessage;
};
