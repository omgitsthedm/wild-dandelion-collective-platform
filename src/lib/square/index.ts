export { squareClient } from './client';

export type {
  SquareService,
  SquareTimeSlot,
  SquareBooking,
  SquareProduct,
  SquareCustomer,
} from './types';

export {
  getAvailability,
  createBooking,
  cancelBooking,
  getBooking,
  listUpcomingBookings,
} from './bookings';

export { listServices, listProducts, getProduct } from './catalog';

export { getStockCounts } from './inventory';

export { findOrCreateCustomer, getCustomer } from './customers';
