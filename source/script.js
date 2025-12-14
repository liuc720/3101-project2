document.addEventListener('DOMContentLoaded', function() {
  
  const movieCards = document.querySelectorAll('.movie-card');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filter = this.getAttribute('data-filter');
      
      // Show/hide movies
      movieCards.forEach(card => {
        const genre = card.getAttribute('data-genre');
        
        if (filter === 'all' || genre === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
});
