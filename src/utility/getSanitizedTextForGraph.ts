const getSanitizedTextForGraph = (inputText: string): string[] => {
  // replace line break '\n' with ','.
  let sanitizedText = inputText.replace(/\n/g, ',');
  // remove all spaces
  sanitizedText = sanitizedText.replace(/\s/g, '');
  // split text based on '-' and ','
  const sanitizedTextList: string[] = sanitizedText.match(/[-|,]|[^-|^,]*/g) || [];
  sanitizedTextList.pop();
  return sanitizedTextList;
};

export default getSanitizedTextForGraph;
