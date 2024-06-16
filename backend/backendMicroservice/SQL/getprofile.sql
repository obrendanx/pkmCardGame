USE [backendMicroservice]
GO

/****** Object:  StoredProcedure [dbo].[AddInterest] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE GetUserProfile
    @UserId UNIQUEIDENTIFIER
AS
BEGIN
    SELECT * FROM UserProfile WHERE UserId = @UserId;
END
GO