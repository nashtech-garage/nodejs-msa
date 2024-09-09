export enum DATABASE_NAME {
    BFF = 'bff',
    LISTING = 'listing',
    RESERVATION = 'reservation',
    PAYMENT = 'payment',
    SEARCH = 'search',
}

export enum ENTITY_ALIAS {
    USERS = 'users',
    HOTELS = 'hotels',
    ROOMS = 'rooms',
    LOCATIONS = 'locations',
    LANDMARKS = 'landmarks',
    NEARBY_LANDMARKS = 'nearby_landmarks',
    AMENITIES = 'amenities',
    RESOURCES = 'resources',

    ROOM_AMENITIES = 'room_amenities',
    ROOM_RESOURCES = 'room_resources',
    ROOM_BOOKINGS = 'booking',

    HOTELS_REVIEWS = 'hotels_reviews',
    HOTELS_RESOURCES = 'hotels_resources',
}

export enum ISOLATION_LEVEL {
    READ_UNCOMMITTED = 'READ UNCOMMITTED',
    READ_COMMITTED = 'READ COMMITTED',
    REPEATABLE_READ = 'REPEATABLE READ',
    SERIALIZABLE = 'SERIALIZABLE',
}