import nodemailer from 'nodemailer';
import { MailConfig } from '../configs/global.config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MailConfig.GMAIL_ADDRESS,
    pass: MailConfig.GMAIL_PASS
  }
});

export async function sendMail(mails: Array<string>, currentRate: number) {
  const mailOptions = {
    from: `Exchange currency service <${MailConfig.GMAIL_ADDRESS}>`,
    to: mails.join(', '),
    subject: '',
    text: currentRate.toString()
  };

  return await transporter.sendMail(mailOptions);
}
