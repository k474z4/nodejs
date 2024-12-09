import nodemailer from 'nodemailer';
import { EmailService, SendMailOptions } from "./email.service."



describe('EmailService', () => {

    const mockSendMail = jest.fn();

    nodemailer.createTransport = jest.fn().mockReturnValue({
        sendMail: mockSendMail
    });

    const emailService = new EmailService();


    test('should send email', async () => {

        const options: SendMailOptions = {
            to: 'k474z4.dev@gmail.com',
            subject: 'test',
            htmlBody: '<h1>Test</h1>'
        }

        const emailSent = await emailService.sendEmail(options)

        expect(mockSendMail).toHaveBeenCalledWith({
            attachments: expect.any(Array),
            html: "<h1>Test</h1>",
            subject: "test",
            to: "k474z4.dev@gmail.com",
        });

    })


    test('should send email with attachments', async () => {

        const email = 'k474z4.dev@gmail.com'
        await emailService.sendEmailWithFileSystemLogs(email);

        expect(mockSendMail).toHaveBeenCalledWith({
            to: email,
            subject: "Logs del servidor",
            html: expect.any(String),
            attachments: expect.arrayContaining([
                { filename: 'logs-all.log', path: './logs/logs-all.log' },
                { filename: 'logs-high.log', path: './logs/logs-high.log' },
                { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            ])
        });

    })


})