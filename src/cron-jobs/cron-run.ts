import { CronJob } from 'cron';
import { sendRateToMails } from './sendRateToMails';

const cronRun = () => {
  new CronJob(
    //  '0 8 * * *', // cronTime
    '37 23 * * *', // cronTime
    async function () {
      console.log('CRON RUN');

      await sendRateToMails();

      console.log('CRON STOP');
    }, // onTick
    null, // onComplete
    true, // start automatically
    'UTC+2' // timeZone set to Kyiv time
  );
};

export default cronRun;
