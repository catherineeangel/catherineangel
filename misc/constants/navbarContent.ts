export const NAVBAR_CONTENT = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/',
    onClick: () => {
      document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    },
  },
  {
    title: 'Experience',
    href: '/',
    onClick: () => {
      document.getElementById('experience')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    },
  },
]
