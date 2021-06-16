import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Home() {
  return (
    <div className="container">
      <h3>About</h3>
      <p>
        Phil Garip is a web developer, neon bender, photographer, and sometimes standup comedian based in Brooklyn NY.
      </p>
      <p>
        Phil was born in Hackensack, New Jersey in 1995. He recieved a Bachelor of Fine Arts from Tisch School of the Arts at NYU from the Department of Photography and Imaging in 2018. Upon graduation, he has been learning the craft of neon sign fabrication and has worked as a professional sign bender ever since. Now, Phil is pursuing a career in web design and development with a focus on the intersectiom between art, craft, and technology.
      </p>
      <Footer />
    </div>
  );
}