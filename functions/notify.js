const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.handler = async (event, context) => {
    const { headcount, family } = JSON.parse(event.body);

    await client.messages.create({
        body: `The ${family} family is coming to Vivien's party! They are bringing ${headcount} guests.`,
        from: '+14023789202',
        to: process.env.PHONE_NUMBER,
    });

    return {
        statusCode: 200,
    };
}