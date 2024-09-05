-- Connect to the default 'postgres' database
\c postgres;

-- Check if the 'keycloak' database exists, and create it if it doesn't
SELECT 'CREATE DATABASE keycloak'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'keycloak')
    \gexec