CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL, 
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    version UUID NOT NULL DEFAULT gen_random_uuid() /* dont use , here */
) /* dont use ; here */