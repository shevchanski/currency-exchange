# currency-exchange

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Currency Exchange API

Used: https://currencybeacon.com/

### Technologies used

- TypeScript
- Express.js (Create API)
- Jest (Unit tests)
- Joi (Validation)
- Mongoose/Typegoose (ODM for MongoDB)
- Cron-job
- PM2 (start and manage project)

### Email Subscribtion Logic

1. Send email to be subscribed (POST-method on route '/subscribe')
   - validating sent email
   - checking if email is already subscribed
   - if not, write to DB into collection "Subscribers"

### Mailing to subscribers

1. Define cron-job in separate func:
   - get all subscribers
   - create an array of subscriber's emails
   - call function SendMail(array)
2. Assign cron-job to be done by schedule (every day).
