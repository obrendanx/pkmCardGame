USE [backendMicroservice]
GO

/****** Object: Table [dbo].[Interests] Script Date: 7/27/2024 10:42:10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Interests] (
    [InterestId] INT              IDENTITY (1, 1) NOT NULL,
    [UserId]     UNIQUEIDENTIFIER NULL,
    [Interest]   NVARCHAR (100)   NULL
);

