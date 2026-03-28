export type SquareService = {
  id: string;
  name: string;
  durationMinutes: number;
  priceCents: number;
  priceFormatted: string;
  description: string;
  category: string;
};

export type SquareTimeSlot = {
  startAt: string;
  serviceVariationId: string;
  teamMemberId?: string;
};

export type SquareBooking = {
  id: string;
  status: string;
  startAt: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceName: string;
  durationMinutes: number;
  note?: string;
  createdAt: string;
};

export type SquareProduct = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  priceFormatted: string;
  imageUrl?: string;
  category: string;
  inStock: boolean;
  stockCount?: number;
};

export type SquareCustomer = {
  id: string;
  givenName: string;
  familyName: string;
  emailAddress?: string;
  phoneNumber?: string;
  createdAt: string;
};
