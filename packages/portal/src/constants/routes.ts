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
    path: '/athletes',
    label: 'Athletes',
  },
  {
    path: '/payments',
    label: 'Payments',
  },
];
