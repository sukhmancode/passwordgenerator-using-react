import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("P4$5W0rD!");


  const generatePassword = (checkboxdata, length) => {
    let charset = "",
      generatedPassword = "";

    const selectedOption = checkboxdata.filter((checkbox) => checkbox.state);
    if(selectedOption.length===0){
      alert("please check anything")
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
      
    }

    setPassword(generatedPassword);
  
  };

  return { password, generatePassword };
};
export default usePasswordGenerator;