const nodemailer = require('nodemailer');

// Function to send an email
const sendEmail = async (to, subject, text) => {
    try {
        if (to && process.env.GOOGLE_EMAIL_SEND_ID && process.env.GOOGLE_PASSWORD) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                // host: 'smtp.office365.com',
                port: 587,
                auth: {
                    user: process.env.GOOGLE_EMAIL_SEND_ID, //"harshsanghani2912002@gmail.com",
                    pass: process.env.GOOGLE_PASSWORD //"fhyn mouk dxaa pbok",
                },
            });

            const mailOptions = {
                from: process.env.GOOGLE_EMAIL_SEND_ID,
                to: to,
                subject: subject,
                text: text
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            return info.response;
        }
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};


module.exports = { sendEmail }