contactFormConfig = {
  settings: {
    fullName: '',
    emailTo: '',
    customSubject: function(params) {
      return 'Message from ' + params.name + ' via contact form';
    }
  }
};
