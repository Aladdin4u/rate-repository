const useFormatError = (error) => {
  const errorMessage = ("" + error).split(":")[1].trim();

  return errorMessage;
};

export default useFormatError;
