Template.contactForm.rendered = ->
  document.title = 'Contact'
  $('form').bootstrapValidator
      message: 'This value is not valid'
      feedbackIcons:
        valid: 'fa fa-lg fa-check'
        invalid: 'fa fa-lg fa-close'
        validating: 'fa fa-refresh fa-spin'
      fields:
        name:
          validators:
            notEmpty:
              message: 'Name is required'
            stringLength:
              min: 2
              message: 'Your name is probably more than 1 character long'
        email:
          validators:
            notEmpty:
              message: 'Email is required'
            emailAddress:
              message: 'Not a valid email address'
        message:
          validators:
            notEmpty:
              message: 'Message is required'

Template.contactForm.events
  'success.form.bv form': (event, template)->
    $('button[type=submit]').prop 'disabled', true
    event.preventDefault()
    data =
      name: $('input[name=fullName]').value
      email: $('input[name=email]').value
      message: $('textarea[name=message]').value
    Meteor.call 'sendEmail', data, (err)->
      if err
        Session.set 'formError', true
        $('button[type=submit]').prop 'disabled', false
      else
        Session.set 'formSubmitted', true

Template.contactForm.helpers
  formSubmitted: ->
    Session.get 'formSubmitted'
  formError: ->
    Session.get 'formError'
