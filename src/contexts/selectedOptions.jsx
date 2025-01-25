import React, { createContext, useContext, useState } from "react";

// Criação do contexto
const SelectedOptionContext = createContext();

// Provider para encapsular os componentes
export const SelectedOptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  return (
    <SelectedOptionContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        selectedExercise,
        setSelectedExercise,
      }}
    >
      {children}
    </SelectedOptionContext.Provider>
  );
};

export const useSelectedOption = () => {
  const context = useContext(SelectedOptionContext);

  if (!context) {
    throw new Error(
      "useSelectedOption deve ser usado dentro de SelectedOptionProvider"
    );
  }
  return context;
};

SelectedOptionProvider.propTypes = {
  children: React.Children,
};
