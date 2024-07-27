USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[GetUser] Script Date: 7/27/2024 10:39:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE GetUser
    @UserId UNIQUEIDENTIFIER
AS
BEGIN
    SELECT Password, Email, FullName, DateOfBirth, Announcements, isGlobalAdmin FROM Users WHERE UserId = @UserId;
END
