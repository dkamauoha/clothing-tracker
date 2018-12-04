INSERT INTO users (first_name, last_name, email, profile_pic, auth_id)
VALUES ($1, $2, $3, $4, $5);
SELECT * FROM users
WHERE auth_id = $5;