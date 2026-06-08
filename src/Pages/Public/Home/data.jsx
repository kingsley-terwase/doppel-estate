export const property = [
  {
    propertynumber: "DHS-0001",
    image: "/Images/Home_6.png",
    title: "Luxury Villa in California",
    price: 4,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    discount: "50",
    size: "3500sqm",
    posted: "2 days ago",
    status: "available",
  },

  {
    propertynumber: "DHS-0002",
    image: "/Images/Home_2.png",
    images: ["/Images/Home_2.png"],
    title: "Modern Apartment in Lagos",
    price: 1.2,
    discount: null,
    size: "1200",
    location: "14 Adeola Odeku St, Victoria Island, Lagos",
    posted: "5 days ago",
    status: "available",

    description:
      "A beautifully finished 2-bedroom apartment on the 5th floor of a serviced building " +
      "in the heart of Victoria Island. Enjoy breathtaking lagoon views, 24/7 concierge, " +
      "and easy access to Lagos's top business and dining hubs.",

    nearbyPlaces: [
      "Eko Hotel – 0.5 km",
      "Victoria Island Beach – 1.0 km",
      "Landmark Event Centre – 1.5 km",
    ],
  },

  {
    propertynumber: "DHS-0007",
    image: "/Images/Home_5.png",
    title: "Luxury Villa in California",
    price: 2,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    beds: 4, baths: 3,
    size: "3500sqm",
    agent: { name: "John Doe", image: "/Images/Home_2.png" },
    posted: "2 days ago",
    status: "soldout",
  },

  {
    propertynumber: "DHS-0008",
    image: "/Images/Home_5.png",
    title: "Luxury Villa in California",
    price: 5,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    size: "3500sqm",
    discount: "50",
    agent: { name: "John Doe", image: "/Images/Home_2.png" },
    posted: "2 days ago",
    status: "soldout",     // 👈
  },

  {
    propertynumber: "DHS-0009",
    image: "/Images/Home_5.png",
    title: "Luxury Villa in California",
    price: 5,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    size: "3500sqm",
    posted: "2 days ago",
    status: "soldout",     // 👈
  },

  {
    propertynumber: "DHS-0010",
    image: "/Images/Home_5.png",
    title: "Luxury Villa in California",
    price: 5,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    size: "3500sqm",
    posted: "2 days ago",
    status: "soldout",     // 👈
  },

  {
    propertynumber: "DHS-00011",
    image: "/Images/Home_6.png",
    title: "Luxury Villa in California",
    price: 4,
    location: "2305 Tree Frog Lane Overlandpk, MO 66210",
    discount: "50",
    size: "3500sqm",
    posted: "2 days ago",
    status: "available",
  },
];

export const city = [
  {
    src: "/Images/Home_7.png",
    label: "Gusape",
    subTitle: "82 Properties",
  },
  {
    src: "/Images/Home_8.png",
    label: "Maitama",
    subTitle: "57 Properties",
  },
  {
    src: "/Images/Home_9.png",
    label: "Katampe",
    subTitle: "170 properties"
  },
  {
    src: "/Images/Home_10.png",
    label: "Lugbe",
    subTitle: "17 properties"
  },
  {
    src: "/Images/Home_11.png",
    label: "Kuje",
    subTitle: "27 properties"
  },
];

export const propertyList = [
  {
    label: '1000',
    subLabel: 'Listed Property',
  },
  {
    label: '100',
    subLabel: 'Mega projects',
  },
  {
    label: '50',
    subLabel: 'Awards Won',
  },
  {
    label: '8,610',
    subLabel: 'Happy Clients',
  },
]