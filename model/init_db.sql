DROP TABLE IF EXISTS `table_volunteers`;

CREATE TABLE `table_volunteers`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `sign_up_date` DATE NOT NULL,
    `shift_time` TIME NOT NULL,
    `items_to_donate` VARCHAR(255) NOT NULL
);
