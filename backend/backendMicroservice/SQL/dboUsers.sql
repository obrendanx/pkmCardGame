USE [backendMicroservice]
GO

/****** Object: Table [dbo].[Users] Script Date: 7/27/2024 10:43:11 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users] (
    [UserId]        UNIQUEIDENTIFIER NOT NULL,
    [Username]      NVARCHAR (50)    NOT NULL,
    [FullName]      NVARCHAR (100)   NOT NULL,
    [Password]      NVARCHAR (100)   NOT NULL,
    [Email]         NVARCHAR (100)   NOT NULL,
    [DateOfBirth]   NVARCHAR (50)    NOT NULL,
    [Announcements] BIT              NOT NULL,
    [IsGlobalAdmin] BIT              NOT NULL,
    [CreatedAt]     DATETIME         NOT NULL
);


