function getFullName(user: { firstname: string; surname: string }): string {
  return `${user.firstname} ${user.surname}`;
}

const userinfo = {
  firstname: "Андрей",
  surname: "Андреев",
  city: "Moscow",
  age: 33,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getFullName(userinfo));
