import  contact from '../models/contact_schema';
import sendgridClient from '@sendgrid/mail';

sendgridClient.setApiKey('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');

let saveResponse = (req, res) => {
    console.log(req.body);
    contact.create(req.body)
    .then(() => {
        res.send({
            'status': 'ok'
        });
    })    
    const message = {
            to: 'jamesgeorge2021@cs.ajce.in',
            from: req.body.email,
            subject: req.body.subject,
            text: 'Name: ' + JSON.stringify(req.body.name) + '\nEmail: ' + JSON.stringify(req.body.email) + '\nSubject: ' + JSON.stringify(req.body.subject) + '\nMessage: ' + JSON.stringify(req.body.message)
        }
        sendgridClient.send(message);
};

module.exports = saveResponse;
