const eFun = () => {
  throw new Error("custom error \x1b[31mHello, World!\x1b[0m");
};

eFun();
