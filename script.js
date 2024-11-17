// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function () {
        const isActive = question.classList.contains('active');
  
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(answer => {
          answer.classList.remove('show');
        });
  
        // Remove 'active' class from all questions
        faqQuestions.forEach(q => q.classList.remove('active'));
  
        if (!isActive) {
          // Add 'active' class to clicked question
          question.classList.add('active');
          // Show the corresponding answer
          question.nextElementSibling.classList.add('show');
        }
      });
    });
  });
  