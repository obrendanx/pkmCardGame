USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[AddUser] Script Date: 7/27/2024 10:38:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE AddUser
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
    -- Begin a transaction to ensure both inserts succeed or fail together
    BEGIN TRANSACTION;

    BEGIN TRY
        -- If @UserId is not provided, generate a new one
        IF @UserId IS NULL
        BEGIN
            SET @UserId = NEWID();
        END

        -- Insert into the Users table
        INSERT INTO Users (UserId, FullName, Username, Email, Password, DateOfBirth, Announcements, IsGlobalAdmin, CreatedAt)
        VALUES (@UserId, @FullName, @Username, @Email, @Password, @DateOfBirth, @Announcements, @IsGlobalAdmin, @CreatedAt);

        -- Insert into the UserProfile table using the same UserId
        INSERT INTO UserProfile (UserId, ProfileIconColor, Bio, Gender, Twitter, Facebook, Instagram, FavoritePokemonName, FavoritePokemonImage)
        VALUES (@UserId, '#3F51B5', '', '', '', '', '', '', '');

        -- Commit the transaction
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        -- If an error occurs, roll back the transaction
        ROLLBACK TRANSACTION;

        -- Rethrow the error to be handled by the calling application
        THROW;
    END CATCH
END
