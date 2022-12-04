interface Event {
    id: string;
    title: string;
    date: Date;
    category: string;
    description: string;
    city: {
        address: string;
        latLng: {
            lat: number;
            lng: number;
        };
    };
    venue: {
        address: string;
        latLng: {
            lat: number;
            lng: number;
        };
    };
    hostedBy: string;
    hostPhotoURL: string;
    attendees: Attendee[];
}
