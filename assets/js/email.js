
function initSecureEmails() {
  const emailLinks = document.querySelectorAll('a.secure-email');

  if (emailLinks.length === 0) {
    return;
  }

  emailLinks.forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();

      try {
        const user = atob(this.dataset.user);
        const domain = atob(this.dataset.domain);

        // Validation renforcée
        if (!user || !domain || /[@<>]/.test(user + domain)) {
          console.error('Email invalide décodé');
          return;
        }

        window.location.href = `mailto:${user}@${domain}`;
      } catch (error) {
        console.error('Erreur de décodage:', error);
        // Fallback pour les utilisateurs
        this.textContent = '[Cliquez pour copier]';
        this.onclick = () => {
          navigator.clipboard.writeText('contact@exemple.com');
          this.textContent = 'Email copié!';
        };
      }
    });
  });
}

// Deux méthodes pour s'assurer que le DOM est chargé
if (document.readyState !== 'loading') {
  initSecureEmails();
} else {
  document.addEventListener('DOMContentLoaded', initSecureEmails);
}
