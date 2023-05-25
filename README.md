# NodeJS MSA

Best practices NodeJS in MSA

## Technical stack

* NestJS v9 / Typescript
* NextJS v13 / Typescript
* goauthentik
* Kafka
* Docker

## Architecture

![System Design](docs/imgs/system-design.png)

| NO | Service             | Language    | Description                                                                                                  |
| -- | ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| 1  | homefront           | Typescript  | Homepage for listing all available rooms, show room detail, price and provide reservation function to guest. |
| 2  | merchant app        | Dart        | Provide a mobile app for merchant to manage their rooms, view booking detail, ...                            |
| 3  | admin app           | Typescript  | A web application for admin to manage users, rooms and bookings                                              |
| 4  | BFF                 | Typescript  | Prepare a GraphQL gateway for homefront, merchant app to communicate with internal services                  |
| 5  | identity            | Go          | Provide OIDC authentication                                                                                  |
| 6  | listing-service     | Typescript  | Lists rooms, views room detail, price...                                                                     |
| 7  | reservation-service | Typescript  | Manage room reservation                                                                                      |
| 8  | payment-service     | Typescript  | Processes payment                                                                                            |
| 9  | message-broker      | C/C++       | A Kafka instance                                                                                             |

## Development

See the [Development guide](docs/development-guide.md) to learn how to run and develop this app locally.

