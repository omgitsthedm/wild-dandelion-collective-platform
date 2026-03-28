'use client';

import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from 'react';

export type CustomerDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  note: string;
};

export type BookingState = {
  step: number;
  selectedService: string | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  customerDetails: CustomerDetails | null;
  depositPaid: boolean;
};

type BookingAction =
  | { type: 'setService'; payload: string }
  | { type: 'setDate'; payload: Date }
  | { type: 'setTime'; payload: string }
  | { type: 'setDetails'; payload: CustomerDetails }
  | { type: 'setDeposit'; payload: boolean }
  | { type: 'reset' };

const initialState: BookingState = {
  step: 1,
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  customerDetails: null,
  depositPaid: false,
};

function bookingReducer(
  state: BookingState,
  action: BookingAction,
): BookingState {
  switch (action.type) {
    case 'setService':
      return { ...state, step: 2, selectedService: action.payload };
    case 'setDate':
      return { ...state, step: 3, selectedDate: action.payload };
    case 'setTime':
      return { ...state, step: 4, selectedTime: action.payload };
    case 'setDetails':
      return { ...state, step: 5, customerDetails: action.payload };
    case 'setDeposit':
      return { ...state, step: 6, depositPaid: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const BookingContext = createContext<BookingState>(initialState);
const BookingDispatchContext = createContext<Dispatch<BookingAction>>(() => {});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>
        {children}
      </BookingDispatchContext.Provider>
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}

export function useBookingDispatch() {
  return useContext(BookingDispatchContext);
}
