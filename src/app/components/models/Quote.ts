import { QuoteItem } from './QuoteItem';
export interface Quote {

    quoteName: string,
    clientCode: string,
    date: Date,
    sold: boolean,
    quoteLineItems: [QuoteItem]

}