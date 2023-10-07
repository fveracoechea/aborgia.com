'use server';

type QuoteData = {
  name: string;
  email: string;
  phone: string;
  insurance: string;
  acknowledgement: boolean;
};

export async function createQuoteRequest(data: QuoteData) {
  console.log('From server');
}
