export const publishDate = (): Date => {
  return new Date();
};

export const findDates = (inputText?: string): Date[] => {
  const regEx = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  const datesArr = inputText?.match(regEx)?.map((el) => {
    const [day, month, year] = el.split('/').map(Number);

    return new Date(year, month - 1, day);
  });
  return datesArr || [];
};
