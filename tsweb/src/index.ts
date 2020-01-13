import { UserList } from "./views/UserList";
import { UserProps, User } from "./models/User";
import { Collection } from "./models/Collection";

const root = document.getElementById('root');
if (!root) {
  throw new Error('No root element found');
}

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);

users.on('change', () => {
  new UserList(root, users).render();
});

users.fetch();