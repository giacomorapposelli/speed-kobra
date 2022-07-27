import { calculateTotal } from '../../utils/utils';

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.body[req.body.length - 1];
        const order = req.body.slice(0, req.body.length - 1);
        res.status(201).json({ message: 'OK' });
        const introMessage = `
        Hi ${user.firstname}! Thank you so much for your support!\r\n\
        Here's your order recap:\r\n\r\n
        `;
        const outroMessage = `
        We will contact you very soon about shipment costs and methods, stay tuned!\r\n\r\n
            
        666
        `;
        const message = `
            ${order.map(
                (item) => `
                |------------------------------------------------------------------------------|\r\n\
                ${item.name} - ${item.type}\r\n\
                Size: ${item.size}\r\n\
                Price: ${item.price}€\r\n\
            `
            )}
            |-------------------------------------------------------------------------------|\r\n\
            Total: ${calculateTotal(order)}€\r\n\r\n\
            Email: ${user.email}\r\n\r\n\
            Ship To:\r\n
            ${user.firstname} ${user.lastname}\r\n
            ${user.address}\r\n
            ${user.zip}, ${user.city}\r\n
            ${user.country}\r\n\r\n
        `;
        const msgDataUser = {
            to: user.email,
            from: 'orders@speed-kobra.com',
            subject: 'Order confirmation',
            text: introMessage + message + outroMessage,
            html: (introMessage + message + outroMessage).replace(
                /\r\n/g,
                '<br>'
            )
        };
        const msgDataLocal = {
            to: 'speedkobra666@gmail.com',
            from: 'orders@speed-kobra.com',
            subject: 'We have a new Order',
            text: message.split(',').join(''),
            html: message.replace(/\r\n/g, '<br>')
        };
        mail.send(msgDataLocal);
        mail.send(msgDataUser);
    } else {
        res.status(200).json({ status: 'Ok' });
    }
}
