Meteor.startup(function() {
  Meteor.methods({
   // For this to work, you have to set the MAIL_URL environment variable
   // to smtp://USERNAME:PASSWORD@HOST:PORT/
   // Gmail example: export MAIL_URL=smtp://gmailuser:gmailpass@smtp.gmail.com:465/
   sendEmail: function(params) {
     // Check if params is an object
     check(params, Object);
     // Check if each value is a string, it should not be anything else
     _.each(params, function(value) {
      check(value, String);
     });

     // Let other method calls from the same client start running,
     // without waiting for the email sending to complete.
     this.unblock();
     // Structure the data to send
     message = {
       replyTo: params.name + ' <' + params.email + '>',
       to: contactFormConfig.settings.fullName + ' <' + contactFormConfig.settings.emailTo + '>',
       subject: 'Message from ' + params.name + ' via contact form',
       text: params.message
     };
     // Let's send the email
     Email.send(message);
   }
  });
});
