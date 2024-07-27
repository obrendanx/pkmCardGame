USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[UpdateUserProfile] Script Date: 7/27/2024 10:40:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE UpdateUserProfile
    @UserId UNIQUEIDENTIFIER,
    @ProfileIconColor VARCHAR(50) = NULL,
    @Bio VARCHAR(250) = NULL,
    @Gender VARCHAR(50) = NULL,
    @Twitter NVARCHAR(255) = NULL,
    @Facebook NVARCHAR(255) = NULL,
    @Instagram NVARCHAR(255) = NULL,
    @FavoritePokemonName NVARCHAR(100) = NULL,
    @FavoritePokemonImage NVARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE UserProfile
    SET 
        ProfileIconColor = COALESCE(@ProfileIconColor, ProfileIconColor),
        Bio = COALESCE(@Bio, Bio),
        Gender = COALESCE(@Gender, Gender),
        Twitter = COALESCE(@Twitter, Twitter),
        Facebook = COALESCE(@Facebook, Facebook),
        Instagram = COALESCE(@Instagram, Instagram),
        FavoritePokemonName = COALESCE(@FavoritePokemonName, FavoritePokemonName),
        FavoritePokemonImage = COALESCE(@FavoritePokemonImage, FavoritePokemonImage)
    WHERE UserId = @UserId;
END
