export const validatePassword = (password, firstName, loginId) => {
  const strongRegex = /^(?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])[\w!@#$%^&*]{8,}$/;
  const normalRegex = /^(?=.*[\d])(?=.*[a-z])(?=.*[!@#$%^&])[\w!@#$%^&*]{6,}$/;
  if (firstName && password.includes(firstName)) {
    return "weak";
  }
  if (loginId && password.includes(loginId)) {
    return "weak";
  }
  if (strongRegex.test(password)) {
    return "strong";
  }
  if (normalRegex.test(password)) {
    return "normal";
  }
  return "weak";
};

export const isValidDate = (date) => {
  if (!date || typeof date !== "string") {
    return false;
  } else if (isNaN(new Date(date).getTime())) {
    return false;
  }
  return true;
};

export const path = (p, o) => {
  const reducerFunction = (xs, x) => {
    return xs && xs[x] ? xs[x] : null;
  };
  return p.reduce(reducerFunction, o);
};

export const normalizeSize = (size) => {
  if (typeof size === "number") return `${size}px`;
  return `${size}`;
};

export const checkMobileDevice = () => {
  let returnFlag = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(
      navigator.userAgent
    )
  ) {
    returnFlag = true;
  }
  return returnFlag;
};
