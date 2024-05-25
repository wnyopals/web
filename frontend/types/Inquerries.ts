import {listing} from "./Listing"
import {Message} from "./Messages"

export type InquiryResponse = {
    id: number;
    userId?: number | null;
    email: string;
    phoneNumber: string;
    subject: number;
    createdAt: Date;
    updatedAt: Date;
    Listing: listing;
    Messages: Message []
}

export type InquiryRequest = {
    userId?: number | null;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
    listingId: number;
}