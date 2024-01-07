# Data Modelling

| Type  | Operation                                   | Information                                                | Frequency     | Criticality |
| :---- | :------------------------------------------ | :--------------------------------------------------------- | :------------ | :---------- |
| Write | New Athletes                                | First name, last name, emails, etc                         | 10 per week   | Medium      |
| Write | New Training Sessions                       | Location, session types, date, etc                         | 11 per week   | High        |
| Write | Sign-in athletes with concession crads      | Athlete ID, Session ID, etc                                | 30-50 per day | Very High   |
| Write | Sign-in athletes who pay fortnightly        | Athlete ID, Session ID, etc                                | 1-10 per day  | Medium      |
| Write | Sign-in athletes as one-off sessions        | Athlete ID, Session ID, etc                                | 1-10 per day  | Low         |
| Write | Record Payments for individual sessions     | Amount, paid by which athlete, for which session, etc      | 5-10 per day  | Medium      |
| Read  | View list of training sessions              | Location, session type, date, etc                          | 1 per day     | Medium      |
| Read  | View list of concession cards of an athlete | No. of sessions attended/left                              | 1 per day     | Low         |
| Read  | View list of athletes                       | Name, $ paid, sessions attended/date last attened training | 1 per day     | Low         |
