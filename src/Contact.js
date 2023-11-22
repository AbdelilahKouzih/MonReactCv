import React from 'react';

export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png"
            alt="icon"
          />
        </div>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Adresse" required />
        <input type="text" placeholder="Sujet" required />
        <textarea placeholder="Description" required></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
