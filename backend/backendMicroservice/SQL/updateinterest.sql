USE [backendMicroservice]
GO

/****** Object: SqlProcedure [dbo].[UpdateInterest] Script Date: 7/27/2024 10:40:03 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE UpdateInterest
    @InterestId INT,
    @Interest NVARCHAR(100)
AS
BEGIN
    -- Update the interest in the Interests table
    UPDATE Interests
    SET Interest = @Interest
    WHERE InterestId = @InterestId;
END
