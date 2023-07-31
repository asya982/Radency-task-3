export const publishDate = (): string => {
  const currentDate = new Date();
  const creationDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return creationDate;
};

export const findDates = (inputText?: string): string[] => {
  const regEx = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  return inputText?.match(regEx) || [];
};
