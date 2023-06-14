create sequence users_user_id_seq
    as integer;

alter sequence users_user_id_seq owner to postgres;

create sequence "order_orderId_seq"
    as integer;

alter sequence "order_orderId_seq" owner to postgres;

create table users
(
    "userId"    integer default nextval('users_user_id_seq'::regclass) not null
        constraint users_pk
            primary key,
    "firstName" varchar(255)                                           not null
        constraint user_name_unique
            unique,
    password    varchar(255)                                           not null,
    "lastName"  varchar(255)                                           not null,
    email       varchar(255)
);

alter table users
    owner to postgres;

alter sequence users_user_id_seq owned by users."userId";

create table category
(
    "categoryName"        varchar(255) not null
        constraint "categoryNameUnique"
            unique,
    "categoryDescription" varchar(2000),
    "categoryId"          serial
        constraint category_pk
            primary key
        constraint "categoryIdUnique"
            unique
);

alter table category
    owner to postgres;

create table products
(
    "productId"   serial
        constraint products_pk
            primary key
        constraint "productIdUnique"
            unique,
    "productName" varchar(255)     not null,
    description   varchar(2000),
    price         double precision not null,
    "categoryId"  integer          not null
        constraint products_category_null_fk
            references category,
    image         bytea
);

alter table products
    owner to postgres;

create table orders
(
    "orderId"     integer default nextval('"order_orderId_seq"'::regclass) not null
        constraint orders_pk
            primary key,
    surname       varchar(255)                                             not null,
    name          varchar(255)                                             not null,
    "phoneNumber" varchar(255)                                             not null,
    email         varchar(255),
    delivery      varchar(255)                                             not null,
    city          varchar(255)                                             not null,
    address       varchar(500)                                             not null,
    "userId"      integer,
    price         numeric                                                  not null
);

alter table orders
    owner to postgres;

alter sequence "order_orderId_seq" owned by orders."orderId";

create table "productsOrder"
(
    "productId" integer not null
        constraint "productsOrder_products_null_fk"
            references products,
    "orderId"   integer not null
        constraint "productsOrder_orders_null_fk"
            references orders
);

alter table "productsOrder"
    owner to postgres;


