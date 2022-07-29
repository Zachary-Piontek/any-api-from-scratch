-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists nfls;

CREATE table nfls (
    id BIGINT NOT NULL,
    name VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    url VARCHAR NOT NULL
);

INSERT into nfls (id, name, city, state, url) values
    (
        '1',
        'Cardinals',
        'Phoenix',
        'Arizona',
        'https://en.wikipedia.org/wiki/Arizona_Cardinals'
    ),
    (
        '2',
        'Falcons',
        'Atlanta',
        'Georgia',
        'https://en.wikipedia.org/wiki/Atlanta_Falcons'
    ),
    (
        '3',
        'Ravens',
        'Baltimore',
        'Maryland',
        'https://en.wikipedia.org/wiki/Baltimore_Ravens'
    ),
    (
        '4',
        'Bills',
        'Buffalo',
        'New York',
        'https://en.wikipedia.org/wiki/Buffalo_Bills'
    ),
    (
        '5',
        'Panthers',
        'Charlotte',
        'North Carolina',
        'https://en.wikipedia.org/wiki/Carolina_Panthers'
    );
