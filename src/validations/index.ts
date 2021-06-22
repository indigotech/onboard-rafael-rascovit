const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
const dtRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const isFutureDate = (param: string) => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString();
  const newMonth = month.length === 1 ? '0' + month : month;
  const day = now.getDate().toString();
  const newDay = day.length === 1 ? '0' + day : day;
  const year = now.getFullYear().toString();

  const date = year + '/' + newMonth + '/' + newDay;
  const newBirth = param.split('/')[2] + '/' + param.split('/')[1] + '/' + param.split('/')[0];

  return Date.parse(newBirth) > Date.parse(date);
};

export const emailValidate = (param: string): boolean => {
  if (!emailRegex.test(param)) {
    return false;
  } else {
    return true;
  }
};

export const passwordValidate = (param: string): boolean => {
  if (!passRegex.test(param)) {
    return false;
  } else {
    return true;
  }
};

export const birthDateValidate = (param: string): boolean => {
  if (!dtRegex.test(param)) {
    return false;
  } else {
    return true;
  }
};

export const futureDateValidate = (param: string): boolean => {
  if (!isFutureDate(param)) {
    return false;
  } else {
    return true;
  }
};

export const maskPhone = (param: string): string => {
  param = param.replace(/ /gm, '');
  let num = `${param.substring(0, 2)} ${param.substring(2, 3)} ${param.substring(3, 7)} ${param.substring(7, 11)}`;
  num = num.trim();
  return num;
};

export const setRequestDate = (param: string): string => {
  const newDate = param
    .split('/')
    .reverse()
    .join('/')
    .replace(/[^a-zA-Z0-9]/g, '-');
  return newDate;
};
