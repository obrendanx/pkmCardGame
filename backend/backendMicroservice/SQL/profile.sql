CREATE TABLE UserProfile (
    UserId UNIQUEIDENTIFIER PRIMARY KEY,
    ProfileIconColor VARCHAR(50),
    Bio VARCHAR(250),
    Gender VARCHAR(50),
    Twitter NVARCHAR(255),
    Facebook NVARCHAR(255),
    Instagram NVARCHAR(255),
    FavoritePokemonName NVARCHAR(100),
    FavoritePokemonImage NVARCHAR(255)
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);