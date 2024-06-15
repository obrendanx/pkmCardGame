USE [backendMicroservice]
GO

/****** Object:  StoredProcedure [dbo].[UpdateInterest] ******/
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
GO
