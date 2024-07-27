USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[AddInterest] Script Date: 7/27/2024 10:38:17 PM ******/
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
