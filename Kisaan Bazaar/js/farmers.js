



// Add hover effect to farmer cards
document.addEventListener('DOMContentLoaded', () => {
  const farmerCards = document.querySelectorAll('.farmer-card');

  farmerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.03)';
      card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Add click alert to Message Farmer buttons
  const messageButtons = document.querySelectorAll('.btn-group .btn');

  messageButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const farmerName = button.closest('.farmer-card').querySelector('h2').innerText;
      alert(`You want to message ${farmerName}`);
      // You can remove this alert if you implement actual messaging later
      
    });
  });
});
