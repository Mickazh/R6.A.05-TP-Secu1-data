export const getAuthHandler = function (req, rep) {
  const user = req.user;
  if (user.role === "admin") {
    return rep.send({ message: "Full access" });
  }
  return rep.send([{ message: "Accès limité" }]);
};

export const getHomeHandler = (req, res) => {
  return res.send({ hello: "world" });
};
