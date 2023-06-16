-- My first procedure
CREATE PROCEDURE countryCount()
BEGIN
  DECLARE total INTEGER;

  SELECT count(*) INTO total FROM countries;

  SELECT @total;
END

