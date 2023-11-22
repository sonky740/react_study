const validationEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export { validationEmail };
