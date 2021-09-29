﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    name: 'players',
    icon: 'team',
    path: '/players',
    component: './Players',
  },
  // {
  //   name: 'editable.players',
  //   icon: 'edit',
  //   path: '/editPlayers',
  //   component: './EditPlayers',
  // },
  // {
  //   name: 'edit',
  //   icon: 'edit',
  //   path: '/edit',
  //   component: './Edit',
  // },
  // {
  //   name: 'add.player',
  //   icon: 'plusCircle',
  //   path: '/add',
  //   component: './AddPlayer',
  // },
  {
    path: '/',
    redirect: '/players',
  },
  {
    component: './404',
  },
];
