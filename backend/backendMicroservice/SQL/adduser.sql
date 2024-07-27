USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[AddUser] Script Date: 6/15/2024 2:01:08 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


ALTER PROCEDURE AddUser
	@UserId UNIQUEIDENTIFIER = NULL,
    @FullName NVARCHAR(100),
    @Username NVARCHAR(50),
    @Email NVARCHAR(100),
    @Password NVARCHAR(100),
    @DateOfBirth NVARCHAR(50),
    @Announcements BIT,
    @IsGlobalAdmin BIT = 0, -- Default value set to 0 (false)
    @CreatedAt DATETIME -- Default value set to current UTC date and time
AS
BEGIN
	IF @UserId IS NULL
    BEGIN
        SET @UserId = NEWID();
    END

    INSERT INTO Users (UserId, FullName, Username, Email, Password, DateOfBirth, Announcements, IsGlobalAdmin, CreatedAt)
    VALUES (@UserId, @FullName, @Username, @Email, @Password, @DateOfBirth, @Announcements, @IsGlobalAdmin, @CreatedAt);

    INSERT INTO UserProfile (UserId, ProfileIconColor, Bio, Gender, Twitter, Facebook, Instagram, FavoritePokemonName, FavoritePokemonImage)
    VALUES (@UserId, '#3F51B5', '', '', '', '', '', '', '');
END
