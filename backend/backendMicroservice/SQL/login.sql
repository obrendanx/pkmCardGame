CREATE PROCEDURE UserLogin
    @Username NVARCHAR(50),
    @Password NVARCHAR(100)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @StoredHashedPassword NVARCHAR(100);
    DECLARE @UserId UNIQUEIDENTIFIER;

    SELECT @StoredHashedPassword = Password, @UserId = UserId
    FROM Users
    WHERE Username = @Username;

    IF @StoredHashedPassword IS NULL
    BEGIN
        -- User not found
        SELECT 'Invalid username or password' AS ErrorMessage;
        RETURN;
    END

    -- If password matches, return user information
    SELECT *
    FROM Users
    WHERE UserId = @UserId;
END