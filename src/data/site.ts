// Site-wide details. The bio and social links are still PLACEHOLDERS: replace them before launch.
export const site = {
  name: 'Amir Jebali',
  // Shown on two lines under the name; joined with ' · ' in the browser tab title.
  roles: ['Film, sound editor', 'Artistic director'],
  description:
    'Amir Jebali is a film editor working across documentary, fiction and music videos, cutting picture and sound as one material.',
  bio: [
    'Amir Jebali is a film editor working across documentary, fiction and music videos, cutting picture and sound as one material.',
    'Trained at ISAMM in Tunisia and at IAD in Belgium, he has edited documentaries, trailers and audiovisual pieces since 2017, and directs and cuts music videos.',
  ],
  education: ['IAD, Belgium', 'ISAMM, Tunisia'],
  email: 'amirjebalipr@gmail.com',
  socials: [
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'Vimeo', url: 'https://vimeo.com/' },
  ],
  // Put the CV at public/cv.pdf, then set this to 'cv.pdf'.
  cv: undefined as string | undefined,
};
