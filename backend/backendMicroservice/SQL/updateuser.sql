USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[UpdateUser] Script Date: 7/27/2024 10:40:30 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE UpdateUser
    @UserId UNIQUEIDENTIFIER,
    @FullName NVARCHAR(100),
    @Password NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    UPDATE Users
    SET 
        FullName = COALESCE(@FullName, FullName),
        Password = COALESCE(@Password, Password)
    WHERE UserId = @UserId;
END
