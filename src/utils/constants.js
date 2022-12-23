const MAX_CARDS = 7;
const SHORTS_DURATION = 40;
const NAME_PATTERN = "[a-zA-Zа-яА-ЯёЁ\\\\ \\\\-]{2,40}";
const EMAIL_PATTERN =
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,20}[a-zA-Z0-9])?\\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,20}[a-zA-Z0-9])?)\\.?(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,20}[a-zA-Z0-9])?)*$";

export { MAX_CARDS, SHORTS_DURATION, NAME_PATTERN, EMAIL_PATTERN };
