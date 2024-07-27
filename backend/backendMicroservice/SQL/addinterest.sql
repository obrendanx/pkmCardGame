USE [backendMicroservice]
GO

/****** Object:  StoredProcedure [dbo].[AddInterest] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE AddInterest
    @UserId UNIQUEIDENTIFIER,
    @Interest NVARCHAR(100)
AS
BEGIN
    -- Insert the new interest into the Interests table
    INSERT INTO Interests (UserId, Interest)
    VALUES (@UserId, @Interest);
END
GO