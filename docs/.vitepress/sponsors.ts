interface Sponsor {
  name: string
  img: string
  url: string
}

const vitestSponsors = {
  provided: [
    {
      name: 'Vite',
      url: 'https://vitejs.dev',
      img: '/vite.svg',
    },
  ],
  special: [
    {
      name: 'NuxtLabs',
      url: 'https://nuxtlabs.com',
      img: '/nuxtlabs.svg',
    },
    {
      name: 'Stackblitz',
      url: 'https://stackblitz.com',
      img: '/stackblitz.svg',
    },
    {
      name: 'Zammad',
      url: 'https://zammad.com',
      img: '/zammad.svg',
    },
  ],
  // platinum: [],
  gold: [
    {
      name: 'vital',
      url: 'https://vital.io/',
      img: '/vital.svg',
    },
  ],
} satisfies Record<string, Sponsor[]>

export const sponsors = [
  {
    tier: 'Brought to you by',
    size: 'big',
    items: vitestSponsors.provided,
  },
  {
    tier: 'Special Sponsors',
    size: 'big',
    items: vitestSponsors.special,
  },
  // {
  //   tier: 'Platinum Sponsors',
  //   size: 'big',
  //   items: vitestSponsors.platinum,
  // },
  {
    tier: 'Gold Sponsors',
    size: 'medium',
    items: vitestSponsors.gold,
  },
]
