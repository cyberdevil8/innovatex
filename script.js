function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Thanks for reaching out. Your message is ready — connect this form to Formspree, Netlify Forms, or EmailJS to receive submissions.';
  event.target.reset();
  return false;
}
