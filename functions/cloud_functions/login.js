const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    });
};
module.exports = login;
