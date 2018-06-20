export const nameCapitalizer = name => name.replace(name.charAt(0), name.charAt(0).toUpperCase());
export const addressCapitalizer = address => address.replace(/\b([a-z])/gi, match => match.toUpperCase());
