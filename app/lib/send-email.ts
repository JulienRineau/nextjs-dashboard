import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, to } = req.body;

    // Create a transporter object with your email service configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Example: Gmail. Replace with your email provider's service.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: to || 'julien@zeroshotdata.com', // Use the "to" field from the form or fallback to your email
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
