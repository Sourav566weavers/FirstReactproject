export const getNameWithDateTime = () => {
    const name = "Hello World";
    const currentDateTime = new Date().toLocaleString(); // Gets current date and time in a readable format
    return `${name} - Current Date & Time: ${currentDateTime}`;
  };
  