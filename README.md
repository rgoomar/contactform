# Contact Form Package for Meteor
This is an easy to use, drop-in package for Meteor that allows you to have a very basic contact form ready-to-go.

## Usage
Add the package with:  
```
meteor add rgoomar:contactform
```

Configure your settings on the ```server```:
```
// Email to send to
contactForm.settings.emailTo = 'test@gmail.com';
// Name (optional)
contactForm.settings.fullName = 'Rishi Goomar';
```

Make an empty template that your router will point to and include this:
```
{{> contactForm }}
```

### Note:
This is still under development. If you have any suggestions, please make an issue for discussion.
