export const SidenavButtons = [
  {name: 'Statistics', imagePath: '../../../assets/statistics.svg', route: '/statistics'},
  {name: 'Users', imagePath: '../../../assets/users.svg', route: '/users' ,submenus: [
    {name: 'User List', route: '/users/user-list'},
    {name: 'User Edit', route: '/users/user-edit'},
    {name: 'Roles and Permissions', route: '/users/roles-and-permissions'},
    {name: 'Settings', route: '/users/settings'}
  ]}
]
