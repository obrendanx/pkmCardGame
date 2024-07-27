USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[GetUserProfile] Script Date: 7/27/2024 10:39:38 PM ******/
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
