USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[GetUser] Script Date: 6/30/2024 4:43:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Batch submitted through debugger: Alter dbo.GetUser|9|0|15063da3-0d66-42e1-9f7a-49b61124af5fMSSQL__/_localdb__MSSQLLocalDB/backendMicroservice/True/SqlProcedure/Alter dbo.GetUser.sql


CREATE PROCEDURE GetUser
    @UserId UNIQUEIDENTIFIER
AS
BEGIN
    SELECT Password, Email, FullName, DateOfBirth, Announcements, isGlobalAdmin FROM Users WHERE UserId = @UserId;
END
