# Contact Form Package for Meteor
This is an easy to use, drop-in package for Meteor that allows you to have a very basic contact form ready-to-go.

## Usage
Add the package with:  
```
meteor add rgoomar:contactform
```

Configure your settings in a file in the ```server/``` folder and your ```MAIL_URL``` environment variable:
```
// Email to send to
contactForm.settings.emailTo = 'test@gmail.com';
// Name (optional)
contactForm.settings.fullName = 'Rishi Goomar';
```
Look at [the email package](http://docs.meteor.com/#email) for more information.

Make an empty template that your router will point to and include this:
```
{{> contactForm }}
```

### Note:
This is still under development. If you have any suggestions, please make an issue for discussion.

## To Do
-[ ] Custom Subject Messages
