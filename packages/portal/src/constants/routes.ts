export type Route = {
  label: string;
  path: string;
};

export const routes: Route[] = [
  {
    path: '/sessions',
    label: 'Training Sessions',
  },
  {
    path: '/members',
    label: 'Members',
  },
  {
    path: '/payments',
    label: 'Payments',
  },
];
