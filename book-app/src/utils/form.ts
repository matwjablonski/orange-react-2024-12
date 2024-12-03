export const cleanForm = (values: any) => {
  const cleanObject: any = {};
  Object.keys(values).forEach((key) => {
    cleanObject[key] = '';
  });

  return cleanObject;
}
