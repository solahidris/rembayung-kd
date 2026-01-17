export const TIME_SLOTS = [
  { id: "lunch", label: "Lunch", time: "12:00 PM - 3:00 PM" },
  { id: "dinner", label: "Dinner", time: "6:00 PM - 10:00 PM" },
] as const;

export const GUEST_LIMITS = {
  min: 2,
  max: 8,
} as const;

export const OPERATING_HOURS = {
  lunch: { open: "12:00", close: "15:00" },
  dinner: { open: "18:00", close: "22:00" },
  closedDay: "Monday",
} as const;

export const CONTACT_INFO = {
  phone: "+60 3-1234 5678",
  email: "hello@rembayung.com",
  address: "123 Jalan Rembayung, Kampung Baru, 50300 Kuala Lumpur",
  instagram: "https://instagram.com/rembayungmy",
  facebook: "https://facebook.com/rembayungmy",
  tiktok: "https://tiktok.com/@rembayungmy",
} as const;

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Nasi Lemak Rembayung",
    description: "Our signature rendition with premium coconut rice, sambal tumis, and slow-cooked rendang",
    price: "RM 28",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Ayam Goreng Berempah",
    description: "Heritage spiced fried chicken, crispy on the outside, juicy within",
    price: "RM 32",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Sambal Nenas Udang",
    description: "The viral pineapple sambal with succulent tiger prawns",
    price: "RM 45",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Gulai Kawah Daging",
    description: "Traditional beef curry slow-cooked in a giant wok, rich and aromatic",
    price: "RM 38",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=600&h=400&fit=crop",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    alt: "Restaurant interior with warm lighting",
    category: "interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Beautifully plated dish",
    category: "food",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
    alt: "Cozy dining atmosphere",
    category: "interior",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    alt: "Signature dishes spread",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop",
    alt: "Restaurant entrance",
    category: "interior",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop",
    alt: "Chef preparing food",
    category: "food",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&h=600&fit=crop",
    alt: "Traditional decor details",
    category: "interior",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
    alt: "Dessert presentation",
    category: "food",
  },
] as const;
