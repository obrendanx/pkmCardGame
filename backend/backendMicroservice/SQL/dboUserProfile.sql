USE [backendMicroservice]
GO

/****** Object: Table [dbo].[UserProfile] Script Date: 7/27/2024 10:42:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[UserProfile] (
    [UserId]               UNIQUEIDENTIFIER NOT NULL,
    [ProfileIconColor]     VARCHAR (50)     NULL,
    [Bio]                  VARCHAR (250)    NULL,
    [Gender]               VARCHAR (50)     NULL,
    [Twitter]              NVARCHAR (255)   NULL,
    [Facebook]             NVARCHAR (255)   NULL,
    [Instagram]            NVARCHAR (255)   NULL,
    [FavoritePokemonName]  NVARCHAR (100)   NULL,
    [FavoritePokemonImage] NVARCHAR (255)   NULL
);


