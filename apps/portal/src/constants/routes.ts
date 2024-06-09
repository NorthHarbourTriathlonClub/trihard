export type Route = {
  label: string;
  path: string;
};

export const routes: Route[] = [
  {
    path: '/athletes',
    label: 'Athletes',
  },
  {
    path: '/sessions',
    label: 'Training Sessions',
  },
  {
    path: '/concession-cards',
    label: 'Concession Cards',
  },
  {
    path: '/individual-session-payments',
    label: 'Individual Session Payments',
  },
];
