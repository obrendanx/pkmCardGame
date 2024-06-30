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