const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  const { headcount, family } = JSON.parse(event.body);

  const msg = {
    to: "mubatt@wyopub.com",
    from: "hello@vivienmcelwee.com", // Use the email address or domain you verified above
    subject: `The ${family} family is coming to Vivien's party!`,
    text: `The ${family} family is coming to Vivien's party! They are bringing ${headcount} guests.`,
    html: `<p>The ${family} family is coming to Vivien's party! They are bringing ${headcount} guests.</p>`,
  };

  await sgMail.send(msg);

  return {
    statusCode: 200,
  };
};
